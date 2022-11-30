import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MovieEditorComponent } from './page/movie-editor/movie-editor.component';
import { MovielistComponent } from './page/movielist/movielist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movielist',
    component: MovielistComponent,
  },
  {
    path: 'movielist/edit/:id',
    component: MovieEditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
