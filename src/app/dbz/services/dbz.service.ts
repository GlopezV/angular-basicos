import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _listadoPersonajes:Personaje[]=[
        {
            nombre:'Vegeta',
            poder:1500
        },
        {
            nombre:'Krilli',
            poder:600
        }
    ];

    get personajesList():Personaje[]{
        return [...this._listadoPersonajes];
    }

    agregarNuevoPersonaje(personaje:Personaje){
        console.log(personaje);
        this._listadoPersonajes.push(personaje);
    }

    constructor(){}
}