import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieHandlerService } from 'src/app/service/movie-handler.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
})
export class MovielistComponent implements OnInit {
  movieList$: Observable<Movie[]> = this.movieService.getAll();
  viewType: 'table' | 'card' = 'table';
  constructor(private movieService: MovieHandlerService) {}

  ngOnInit(): void {}

  onDelete(movie: Movie): void {
    this.movieService
      .remove(movie)
      .subscribe((movie) => (this.movieList$ = this.movieService.getAll()));
  }
}
