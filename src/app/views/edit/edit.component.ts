import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formPost!: FormGroup;
  post!: Post[];
  action: string = "Publicar";
  id: number = 0;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formPost = this.fb.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      image: '',
      iframe: '',
      fecha: '',
    });
  }

  updatePost() {

  }

  campoNoValido(campo: string) {
    return this.formPost.get(campo)?.invalid && this.formPost.get(campo)?.touched;
  }

}
