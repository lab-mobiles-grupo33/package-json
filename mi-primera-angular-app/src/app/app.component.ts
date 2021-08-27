import { Component } from '@angular/core';

@Component({ //decorador
  selector: 'app-root', //cual es el elemento selector para ese componente
                        //Es el <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi-primera-angular-app';
  nombre= 'Angel';
  year='2021';
  correo='angel.medinarc@uanl.edu.mx';
  seMuestra=false;
  numeros= [1, 2, 3, 4, 5];
}
