import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListaExclusivosComponent } from './lista-exclusivos/lista-exclusivos.component';
import { PieComponent } from './pie/pie.component';
import { ExclusivoComponent } from './exclusivo/exclusivo.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ListaExclusivosComponent,
    PieComponent,
    ExclusivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
