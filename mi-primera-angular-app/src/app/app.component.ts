import { Component } from '@angular/core';

@Component({ //decorador
  selector: 'app-root', //<app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mi-primera-angular-app';
  nombre = 'Luz';
  anio = 2021;
  correo = 'aracely.des@uanl.edu.mx';
  seMuestraContenido = false;

  numeros = [1, 2, 3, 4, 5];
}
