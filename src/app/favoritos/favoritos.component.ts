import { Component, OnInit } from '@angular/core';
import  'https://www.gstatic.com/firebasejs/4.12.1/firebase.js';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  config = {
    apiKey: "AIzaSyA6hcHZQlCIyw5PV_ayTB0UUFe6_WXBXnc",
    authDomain: "primerproyeto-de-prueba.firebaseapp.com",
    databaseURL: "https://primerproyeto-de-prueba.firebaseio.com",
    projectId: "primerproyeto-de-prueba",
    storageBucket: "primerproyeto-de-prueba.appspot.com",
    messagingSenderId: "956165577663"
    };
    
  constructor() {
     
   }

  ngOnInit() {
    
  }

}