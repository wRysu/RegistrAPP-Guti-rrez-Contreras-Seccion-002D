import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/firebase/service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  email: string = '';

  constructor(private serviceService:ServiceService,
              private router:Router,
              private alertController: AlertController) {}

  ngOnInit() {
  }

  resetPassword() {
    this.serviceService.resetPassword(this.email)
      .then(() => {
        console.log('Correo de restablecimiento de contraseña enviado con éxito');
        // Puedes mostrar un mensaje al usuario informando que se envió el correo de restablecimiento
        this.presentSuccessAlert();
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error al enviar el correo de restablecimiento de contraseña', error);
        // Puedes mostrar un mensaje de error al usuario
        this.presentErrorAlert();  // Muestra una alerta de error
      });
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Correo de restablecimiento de contraseña enviado con éxito.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Error al enviar el correo de restablecimiento de contraseña.',
      buttons: ['OK']
    });
  
    await alert.present();
  } 
}
