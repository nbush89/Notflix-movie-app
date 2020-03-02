import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  apiKey: string = "f0cd2889cde42e27b8c5aff4688f7b9b";
  favorites: any[] = [];
  dataGenres = [];
  favIdList: any[] = [];
  constructor(private http: HttpClient) {}
  getPopularMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?", {
      params: { api_key: this.apiKey }
    });
  }
  getGenres() {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?", {
      params: { api_key: this.apiKey }
    });
  }
  getMovieTitles(title: string) {
    return this.http.get("https://api.themoviedb.org/3/search/movie?", {
      params: { api_key: this.apiKey, query: title }
    });
  }
  getFavs() {
    return this.favorites;
  }
  getData(queryParams: any) {
    let parameters: any = {
      api_key: this.apiKey
    };
    if (queryParams.year) {
      parameters.year = queryParams.year;
    }
    if (queryParams.rating) {
      parameters["vote_average.gte"] = queryParams.rating;
    }
    if (queryParams.genre) {
      parameters.with_genres = queryParams.genre;
    }
    return this.http.get("https://api.themoviedb.org/3/discover/movie?", {
      params: parameters
    });
  }
  setFavorites(favorites: any[]) {
    this.favorites = favorites;
  }
  setIds(ids: any[]) {
    this.favIdList = ids;
  }
  getIds() {
    return this.favIdList;
  }
}
