import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listPost: Post[] = [
    // {
    //   id: 1,
    //   titulo: 'Angular',
    //   contenido: 'Angular es un framework de codigo abierto muy compacto',
    //   fecha: new Date(),
    // }
  ];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getArticulos()
      .subscribe(data => {
        this.listPost = data;
        console.log(data);
      },
        error => {
          console.log(error);
        });
  }

  deletePost(id: any) {
    this.postService.deleteArticulos(id)
      .subscribe(data => {
        this.getPosts();
      })
  }

}
