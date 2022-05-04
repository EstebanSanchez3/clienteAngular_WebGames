import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

//IMPORT DEL MODELS CLASS EXCLUSIVO
  import { exclusivo } from "../models/exclusivo.model";
//SE IMPORTA EN APP.MODULE Y SE USA AQUÍ
  import { HttpClient } from '@angular/common/http'  
//
  @Injectable({
    providedIn: 'root'
})
//DECLARACIÓN PARA EXPORTAR SERVICE
  export class SExclusivoService {

//(1ºNOMBRE BBDD)(2ºNOMRE DE EVENTO)
//SE DIFERENCIAN POR LOS COLORES
  exclusivos_ps4: Observable<exclusivo[]> = new Observable();

//DESPUÉS APARECE EN CONEXIÓN CON ECLIPSE ABAJO 
  constructor(private clientHttp: HttpClient) {
  }

  getexclusivo(): Observable<exclusivo[]>{
      console.log("Obteniendo exclusivos del ws");

//CONEXIÓN CON ECLIPSE
  this.exclusivos_ps4 = this.clientHttp.get<exclusivo[]>
  
//CONECTA CON @GetMapping DE RESTCONTOLLER 
  ("http://localhost:8080/exclusivos")
  return this.exclusivos_ps4
    }
}