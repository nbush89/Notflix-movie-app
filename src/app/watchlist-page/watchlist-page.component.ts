import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-watchlist-page",
  templateUrl: "./watchlist-page.component.html",
  styleUrls: ["./watchlist-page.component.css"]
})
export class WatchlistPageComponent implements OnInit {
  favorites: any[] = [];
  favoriteIds: number[] = [];
  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavs();
    this.favoriteIds = this.service.getIds();
  }

  removeFav(index: number) {
    this.favorites.splice(index, 1);
    this.favoriteIds.splice(index, 1);
    this.service.setFavorites(this.favorites);
    this.service.setIds(this.favoriteIds);
  }
}
