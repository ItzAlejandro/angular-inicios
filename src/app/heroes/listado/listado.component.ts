import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
   heroes:string[]=['SPIDERMAN','IROMAN','HULK','THOR','CAPITAN AMERICA'];
   heroesBorrados:string='';
   borrar(){
      //this.heroes.splice(0,3);//ELIMINAR UN RANGO
      this.heroesBorrados= this.heroes.shift()||'';//ELIMINA EL PRIMER REGISTRO Y NOS RETORNA
    }
  }
