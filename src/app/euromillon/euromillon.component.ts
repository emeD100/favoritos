import { Component, OnInit } from '@angular/core';
import { Paginas } from '../class/paginas';
import { Categorias } from '../class/categorias';
import { Favoritos } from '../class/favoritos';

@Component({
  selector: 'app-euromillon',
  templateUrl: './euromillon.component.html',
  styleUrls: ['./euromillon.component.css']
})
export class EuromillonComponent implements OnInit {

  paginas : Paginas[];
  categorias : Categorias[];
  favoritos : Favoritos[];
  favorito : Favoritos;
  
  constructor() { }

  ngOnInit() {
  }

}