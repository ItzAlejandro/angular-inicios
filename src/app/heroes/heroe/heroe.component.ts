import { Component } from "@angular/core";

@Component({
  selector:'app-heroe',
  templateUrl:'./heroe.component.html'
})
export class HeroeComponent{
  nombre:string='IROMAN';
  edad:number=48;
  get nombreCapitalizado():string{
    return this.nombre.toLowerCase();
  }
  mostrar():string{
    return `${this.nombre} - ${this.edad}`;
  }
  cambiarNombre():void{
     this.nombre='Spider- Man';
  }
  cambiarEdad():void{
    this.edad=30;
  }
}
