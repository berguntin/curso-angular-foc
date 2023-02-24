import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CancionesComponent } from './canciones/canciones.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
