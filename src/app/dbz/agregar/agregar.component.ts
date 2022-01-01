import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo:Personaje={
    nombre:'',
    poder:0
  }

  //se comenta debido a que se centralizo en el servicio el agregar personaje
  // @Output() onNuevoPersonaje:EventEmitter<Personaje>=new EventEmitter();


  agregar(){
     //se comenta debido a que se centralizo en el servicio el agregar personaje
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

  constructor(private dbzService:DbzService){}


}
