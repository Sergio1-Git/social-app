import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  formPost!: FormGroup;
  post!: Post;

  constructor(private fb: FormBuilder) {

    this.formPost = this.fb.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      image: '',
      iframe: '',
      created_at: '',
    });
  }

  ngOnInit(): void {
  }

  add() {
    if (this.formPost.valid) {
      this.post = {
        titulo: this.formPost.get('titulo')?.value,
        contenido: this.formPost.get('titulo')?.value,
        imagen: this.formPost.get('titulo')?.value,
        iframe: this.formPost.get('titulo')?.value,
        created_at: new Date('dd-MM-yyyy'),
      }
    }
    console.log(this.post);
  }

  campoNoValido(campo: string) {
    return this.formPost.get(campo)?.invalid && this.formPost.get(campo)?.touched;
  }

}
