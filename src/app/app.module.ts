import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { MovielistComponent } from './page/movielist/movielist.component';
import { NavComponent } from './common/nav/nav.component';
import { MovieEditorComponent } from './page/movie-editor/movie-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovielistComponent,
    NavComponent,
    MovieEditorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
