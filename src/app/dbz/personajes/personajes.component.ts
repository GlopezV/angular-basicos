import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //Aqui se recibe desde el componente padre *main-page.component* la lista de personajes this.listadoPersonajes
  // @Input() personajes:Personaje[]=[];

  get personajes(){
    return this.dbzService.personajesList;
  }


  constructor(private dbzService:DbzService){}
}
