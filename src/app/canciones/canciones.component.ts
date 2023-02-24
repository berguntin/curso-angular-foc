import { Component, OnInit } from '@angular/core';
import { Cancion } from './cancion.model';


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo:string = "";
  artista:string = "";
  formato:string = ""
  
  mensaje:string = "";
 
  canciones:Array<Cancion>=[
    new Cancion("All you need is love", "The Beatles", "mp3"),
    new Cancion("All allong the Watchtower", "Jimmy Hendrix", "wav"),
    new Cancion("Renacimiento", "Kase.O", "mp3")
  ];

  guardarCancion(titulo:string, artista:string, formato:string){
    if(titulo != ""){
      let miCancion = new Cancion(titulo, artista, formato)
      this.canciones.push(miCancion)
    }
    else {
      this.mensaje = "Es obligatorio poner titulo de la cancion"
    }
  }


}
