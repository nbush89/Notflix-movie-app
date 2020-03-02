import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MovieService } from "../movie.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  movies: any;
  genres: any;
  constructor(
    private service: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getGenres().subscribe(response => {
      this.genres = response["genres"];
    });
    this.route.queryParams.subscribe(response => {
      if (response) {
        if (response.title) {
          this.service.getMovieTitles(response.title).subscribe(response => {
            this.movies = response["results"];
          });
        } else {
          this.service.getData(response).subscribe(response => {
            this.movies = response["results"];
          });
        }
      } else {
        this.service.getPopularMovies().subscribe(response => {
          this.movies = response["results"];
        });
      }
    });
  }

  findMovieByTitle(form: NgForm) {
    let parameters: any = {};
    if (form.value.title) {
      parameters.title = form.value.title;
    }
    this.router.navigate(["search-criteria"], { queryParams: parameters });
  }
  searchMovies(form: NgForm) {
    let parameters: any = {};
    if (form.value.year) {
      parameters.year = form.value.year;
    }
    if (form.value.rating) {
      parameters.rating = form.value.rating;
    }
    if (form.value.genre) {
      parameters.genre = form.value.genre;
    }
    this.router.navigate(["search-criteria"], { queryParams: parameters });
  }
}
