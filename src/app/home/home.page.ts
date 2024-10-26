import { APIService, Root } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export default class HomePage implements OnInit{
  items:any = [];

  constructor(
    private APIService:APIService
  ) {}

  ngOnInit(){
    //Se obtiene los productos del localstorage con la llave 'Object'
    const Object = localStorage.getItem('Object');
    if(Object  !!=null){
      this.items = JSON.parse(Object);
      console.log('Obtiene productos desde el LocalStorage')
    }else{
    this.APIService.obtenerInfo().subscribe((Object)=>{
      console.log('Obtienenlosproductos desde la API')
      this.items = Object;
      //Se aLmacena en el localstorage con la llave 'productos'
      localStorage.setItem('productos',JSON.stringify(this.items));
    });
  }
}}


