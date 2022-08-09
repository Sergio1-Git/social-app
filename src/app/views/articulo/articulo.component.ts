import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  idArticulo: number;
  post: Post | null = null;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.idArticulo = +activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.idArticulo);
  }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postService.getArticulo(this.idArticulo)
      .subscribe(data => {
        this.post = data;
        console.log("post: ",data);
      });
  }
}
