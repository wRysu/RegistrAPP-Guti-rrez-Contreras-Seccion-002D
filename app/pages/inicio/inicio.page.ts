import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  username: string='';

  constructor(private menuController: MenuController,
              private router: Router) {    
                const storedUserDataString = localStorage.getItem('userData');
  
                if (storedUserDataString) {
                  const storedUserData = JSON.parse(storedUserDataString);
                  this.username = storedUserData.username;
              }
            }



  mostrarMenu(){
    this.menuController.open('first')
  }

  ngOnInit() {

  }

 
  
  logOut() {
    // Eliminar el estado de inicio de sesión en localStorage.
    localStorage.removeItem('userData');

    // Redirigir al usuario a la página de inicio de sesión.
    this.router.navigate(['/login']);
  }

  
}
