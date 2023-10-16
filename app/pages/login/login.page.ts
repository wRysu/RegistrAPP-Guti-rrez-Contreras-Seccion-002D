import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    // Verifica si hay datos en el localStorage
    const storedUserDataString = localStorage.getItem('userData');

    if (storedUserDataString) {
      const storedUserData = JSON.parse(storedUserDataString);

      if (
        this.email === storedUserData.email &&
        this.password === storedUserData.password
      ) {
        // Los datos de inicio de sesión son válidos, redirige al usuario a la página de inicio
        this.navCtrl.navigateForward('/inicio');
      } else {
        // Datos de inicio de sesión incorrectos, muestra un mensaje de error
        console.log('Correo electrónico o contraseña incorrectos');
      }
    } else {
      // No se encontraron datos en el localStorage, muestra un mensaje de error
      console.log('No se encontraron datos de registro');
    }
  }
}