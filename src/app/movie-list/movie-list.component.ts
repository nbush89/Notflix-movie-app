import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  isShow = false;
  btnPopUp: any = this.isShow;
  toggle: boolean = true;
  status: string = "enable";
  favorites: any[] = [];
  favIds: any[] = [];
  showIndex: number;
  @Input() movieList: any;
  constructor(private service: MovieService) {}

  toggleDisplay() {
    this.showIndex = null;
  }

  toggleFavorite(favorite: any) {
    if (this.favIds.includes(favorite.id)) {
      let index = this.favIds.findIndex(fav => {
        return fav === favorite.id;
      });
      this.favIds.splice(index, 1);
      this.favorites.splice(index, 1);
      this.service.setFavorites(this.favorites);
      this.service.setIds(this.favIds);
    } else {
      this.favIds.push(favorite.id);
      this.favorites.push(favorite);
      this.service.setFavorites(this.favorites);
      this.service.setIds(this.favIds);
    }
  }
  checkFav(movie: any) {
    return this.favIds.includes(movie.id);
  }
  showInfo(index: number) {
    this.showIndex = index;
  }
  ngOnInit(): void {
    this.favIds = this.service.getIds();
    this.favorites = this.service.getFavs();
  }
}
