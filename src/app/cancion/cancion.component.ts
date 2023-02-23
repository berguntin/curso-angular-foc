import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  
  titulo:String = "";
  artista:String = "";
  formato:String= "";
  
  constructor() { 
  }

  ngOnInit(): void {
  }

 
}
