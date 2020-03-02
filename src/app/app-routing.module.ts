import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { WatchlistPageComponent } from "./watchlist-page/watchlist-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/search-criteria", pathMatch: "full" },
  { path: "movie-list", component: MovieListComponent },
  { path: "watchlist-page", component: WatchlistPageComponent },
  { path: "**", component: SearchCriteriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
