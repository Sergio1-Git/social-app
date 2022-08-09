import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  formPost!: FormGroup;
  post!: Post;

  action: string = "Publicar";
  id: number = 0;

  fecha: string = "";

  constructor(private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = +activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.formPost = this.fb.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      imagen: '',
      iframe: '',
      fecha: '',
    });
    this.onEdit();
  }

  onEdit() {
    if (this.id !== 0) {
      this.action = "Editar";
      this.postService.getArticulo(this.id)
        .subscribe(data => {
          this.formPost.patchValue({
            id: data.id,
            titulo: data.titulo,
            contenido: data.contenido,
            imagen: data.imagen,
            iframe: data.iframe,
            fecha: data.fecha,
          });
          this.post = data;
          console.log("post: ", data);
        });
    }
  }

  accion() {
    if (!this.id) {
      const getPost = {
        titulo: this.formPost.get('titulo')?.value,
        contenido: this.formPost.get('contenido')?.value,
        imagen: this.formPost.get('imagen')?.value,
        iframe: this.formPost.get('iframe')?.value,
        fecha: String(new Date('dd-MM-yyyy')),
      };
      this.postService.addArticulo(getPost)
        .subscribe(data => {
          // this.post = data;
          this.router.navigate(['/']);
        });
    } else {
      // Editar
      const updated: Post = {
        id: this.post.id,
        titulo: this.formPost.get('titulo')?.value,
        contenido: this.formPost.get('contenido')?.value,
        imagen: this.formPost.get('imagen')?.value,
        iframe: this.formPost.get('iframe')?.value,
        fecha: this.post.fecha,
      };
      console.log(updated);
      this.postService.updateArticulo(this.id, updated)
        .subscribe(() => {
          this.router.navigate(['/']);
        },
          error => {
            console.log('error: ',error);
          });
    }
  }

  campoNoValido(campo: string) {
    return this.formPost.get(campo)?.invalid && this.formPost.get(campo)?.touched;
  }
}
