import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  componentes : Componente[]=[
    
    {
      name:'Inicio',
      icon:'home-outline',
      redirecTo:'/inicio'
    },
    
    {
      name:'Contexto',
      icon:'newspaper-outline',
      redirecTo:'/contexto'
    },

    {
      name:'Formulario de registro',
      icon:'add-circle-outline',
      redirecTo:'/form'
    }


  ]
  
  constructor() {}
}
