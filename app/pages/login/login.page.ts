import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../../firebase/service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';


  constructor(private serviceService:ServiceService,  private router: Router) {

  }

  async signIn() {
    try {
      const credentials = await this.serviceService.signIn(this.email, this.password);
      console.log(credentials);

      // Redirigir al usuario a la página home si el inicio de sesión es exitoso
      this.router.navigate(['/inicio']);
    } catch (error) {

      // Puedes mostrar un mensaje de error al usuario si lo deseas
    }
  }

  ngOnInit() {
  }


  


}
