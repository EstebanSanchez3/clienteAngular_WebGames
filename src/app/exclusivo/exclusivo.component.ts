import { Component, Input, OnInit } from '@angular/core';
import { exclusivo } from '../models/exclusivo.model';

@Component({
  selector: 'app-exclusivo',
  templateUrl: './exclusivo.component.html',
  styleUrls: ['./exclusivo.component.css']
})
export class ExclusivoComponent implements OnInit {

//INPUT CONECTA del otro "CAJA" 
//(CREAR 1º"EXCLUSIVO")(DE LA CLASE 2ºEXCLUSIVO DE MODELS.TS)
//CUANDO PONGAS PARENTESIS SALDRÁ UNA PESTAÑA CON↓↓
//↑↑EL TIPO DE DATO A INTRODUCIR
//1ºEXCLUSIVO EN CORCHETE DE HTML del otro "CAJA"
//VOLVER A HTML del otro "CAJA"
 @Input() exclusivo:exclusivo = new exclusivo(0,"","",0,"","","","","","")
  constructor() { }

  ngOnInit(): void {
  }

}
