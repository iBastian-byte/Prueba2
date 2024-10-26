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
    //Se obtiene los productos del localstorage
    const Object = localStorage.getItem('Object');
    if(Object  !!=null){
      this.items = JSON.parse(Object);
      console.log
    }else{
    this.APIService.obtenerInfo().subscribe((Object)=>{
      console.log
      this.items = Object;
      //Almacenamos en el LocalStorage
      localStorage.setItem('Object',JSON.stringify(this.items));
    });
  }
}}


