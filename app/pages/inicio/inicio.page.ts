import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { ServiceService } from '../../firebase/service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController,
              private serviceService:ServiceService,
              private router: Router) {}

  ngOnInit() {
  }

  async signOut() {
    try {
      await this.serviceService.signOut();
      // Redirige al usuario a la página de inicio después del cierre de sesión
      this.router.navigate(['/login']);
    } catch (error) {

      // Puedes manejar el error según tus necesidades
    }
  }


  mostrarMenu(){
    this.menuController.open('first')
  }
  

}

// this.router.navigate(['/login']);


