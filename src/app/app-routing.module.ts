import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AddPostComponent } from './views/add-post/add-post.component';
import { ArticuloComponent } from './views/articulo/articulo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agregar', component: AddPostComponent },
  { path: 'articulo/:id', component: ArticuloComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: '/', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
