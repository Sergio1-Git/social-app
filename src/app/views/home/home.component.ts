import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listPost: Post[] = [
    {
      id: 1,
      titulo: 'Angular',
      contenido: 'Angular es un framework de codigo abierto muy compacto',
      created_at: new Date(),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
