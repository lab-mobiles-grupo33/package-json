import { Component, OnInit } from '@angular/core'; // imports los miembros que necesitamos

@Component({ //decorador del component //metadatos y template
  selector: 'app-hola-mundo', //define el nombre la directiva, un simple tag de HTML
  templateUrl: './hola-mundo.component.html', //el HTML que renderiza el navegador
  styleUrls: ['./hola-mundo.component.scss']
})
export class HolaMundoComponent implements OnInit { //propiedades de la clase y metodos necesitados por la vista

  mensaje: string = 'Hola, mundo!';
  testBoolean : boolean = true;
  numerosArreglo: Array<string> =[
    '1', 
    '2',
  ] 

  triggerClick(event: any) {
    alert("test test test")
  }

  constructor() { }

  ngOnInit(): void {
  }

}

