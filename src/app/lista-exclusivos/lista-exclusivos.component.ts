import { Component, OnInit } from '@angular/core';

//EXPORT DE CLASS MODELS  
//DECLARACIÓN PARA EXPORTAR DE SERVICE
  import { exclusivo } from '../models/exclusivo.model';
  import { SExclusivoService } from '../services/s-exclusivo.service';

@Component({
  selector: 'app-lista-exclusivos',
  templateUrl: './lista-exclusivos.component.html',
  styleUrls: ['./lista-exclusivos.component.css']
})
export class ListaExclusivosComponent implements OnInit {

//ARRAY ALMACENA TODO  
//(1ºNOMBRE BBDD)(2ºNOMRE DE EVENTO)
//DIFERENCIA COLORES COMO EN SERVICE
//↓ESTE(1ºexclusivos_ps4)EN "OF" DENTRO DE "NGFOR" HTML del mismo "CAJA"
  exclusivos_ps4:exclusivo[] = new Array<exclusivo>() ;

//DESPUÉS APARECE EN NGONINI
  constructor(private servicioexclusivo:SExclusivoService) {
   }

//CASI TODO SE GENERA AUTOMÁTICO POR QUE YA LO HAS METIDO ANTES
  ngOnInit(): void {
    this.servicioexclusivo.getexclusivo().subscribe(
         exclusivos_ps4 =>{
         this.exclusivos_ps4=this.exclusivos_ps4 ;
       })
  }
}
