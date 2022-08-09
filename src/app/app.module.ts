import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AddPostComponent } from './views/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticuloComponent } from './views/articulo/articulo.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './views/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddPostComponent,
    ArticuloComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
