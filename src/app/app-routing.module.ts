import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AddPostComponent } from './views/add-post/add-post.component';
import { ArticuloComponent } from './views/articulo/articulo.component';
import { EditComponent } from './views/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agregar', component: AddPostComponent },
  { path: 'articulo/:id', component: ArticuloComponent },
  { path: 'editar/:id', component: AddPostComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
