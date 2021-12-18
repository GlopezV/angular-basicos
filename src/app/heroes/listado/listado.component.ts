import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:String[]=['Spirdeman','Iroman','Holk','Capitan America'];
  heroeBorrado: String ='';

  borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';
  console.log(this.heroeBorrado);
  }

}
