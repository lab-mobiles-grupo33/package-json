import { Component, OnInit } from '@angular/core'; // imports los miembros que necesitamos

@Component({ //decorador del component
  selector: 'app-hola-mundo', //metadatos y template
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.scss']
})
export class HolaMundoComponent implements OnInit { //propiedades de la clase y metodos necesitados por la vista

  mensaje: string = 'Hola, mundo!';

  constructor() { }

  ngOnInit(): void {
  }

}
