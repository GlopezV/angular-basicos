import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

 
  nuevoPersonaje:Personaje={
    nombre:'',
    poder:0
  }

  // se paso al servicio
  // agregarNuevoPersonaje(personaje:Personaje){
  //   console.log(personaje);

  //   La lista this.listadoPersonajes es la que pasa desde este componente padre
  //   hacia el hijo que seria el componente personajes.component.ts
  //   this.listadoPersonajes.push(personaje);
  //   }

  // cambiarPersonaje(event:any){
  //   console.log(event.target.value);
  // }

  constructor(){}
}
