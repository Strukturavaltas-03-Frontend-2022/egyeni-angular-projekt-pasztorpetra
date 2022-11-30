import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieHandlerService } from 'src/app/service/movie-handler.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss'],
})
export class MovieEditorComponent implements OnInit {
  movie$: Observable<Movie> = this.ar.params.pipe(
    switchMap((params) => this.movieService.get(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private movieService: MovieHandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onUpdate(movie: Movie): void {
    this.movieService
      .update(movie)
      .subscribe((user) => this.router.navigate(['/', 'movielist']));
  }
}
