import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  persona={
    nombre:'',
    email:'',
    password:'',
    password2:''
  }

  constructor(private menuController: MenuController,
              private alertController:AlertController) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first')
  }
  
  async Enviar() {
    const alert = await this.alertController.create({
      header: 'Gracias!!!',
      message: 'Sus datos han sido almacenados!!!',
      buttons: ['OK'],
    });

    await alert.present();

    this.persona.nombre='';
    this.persona.email='';
    this.persona.password='';
    this.persona.password2='';

  }
}
