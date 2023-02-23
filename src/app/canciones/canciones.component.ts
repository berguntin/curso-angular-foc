import { Component, OnInit } from '@angular/core';
import { CancionComponent } from '../cancion/cancion.component';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canciones:Array<CancionComponent> = [];

  guardarCancion(cancion:CancionComponent){
    this.canciones.push(cancion);
  }


}
