import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-primera-angular-app';

  nombre = 'Shomer';
  anio = 2021;
  correo ='shomeryail@gmail.com'
  seMuestraContenido = false;

  numeros =[1,2,3,4];
}
