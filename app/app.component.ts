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
      name:'Escaner',
      icon:'scan-outline',
      redirecTo:'/escaner'
    },

    {
      name:'Perfil de usuario',
      icon:'person-circle-outline',
      redirecTo:'/perfil'
    }

    

    


    


    

  ]
  
  constructor() {}
}
