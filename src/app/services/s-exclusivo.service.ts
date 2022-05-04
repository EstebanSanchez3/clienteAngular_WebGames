import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

//IMPORT DEL MODEL
import { exclusivo } from "../models/exclusivo.model";

import { HttpClient } from '@angular/common/http'  

@Injectable({
    providedIn: 'root'
})

export class SExclusivoService {

 exclusivos_ps4: Observable<exclusivo[]> = new Observable();

 constructor(private clientHttp: HttpClient) {
  }

  getexclusivo(): Observable<exclusivo[]>{
      console.log("Obteniendo exclusivos del ws");

      this.exclusivos_ps4 = this.clientHttp.get<exclusivo[]>
      ("http://localhost:8080/crearExclusivos")
      return this.exclusivos_ps4
    }
}