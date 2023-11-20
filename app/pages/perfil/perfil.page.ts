import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { ServiceService } from '../../firebase/service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userData: any;
  isEditing: boolean = false; 

  // Define variables para los campos que quieres actualizar
  gender: string = '';
  phoneNumber: string = '';
  sostenedorName: string = '';
  becas: number = 0;

  constructor(private menuController: MenuController,
              private serviceService:ServiceService) { }



  ngOnInit() {
    this.getUserData();
  }
            
  async getUserData() {
    try {
      this.userData = await this.serviceService.getUserData();
      console.log(this.userData);
    } catch (error) {
      // Puedes manejar el error según tus necesidades
    }
  }

  async updateSpecificUserData() {
    try {
      const newData = {
        gender: this.gender,
        phoneNumber: this.phoneNumber,
        sostenedorName: this.sostenedorName,
        becas: this.becas,
        // Otros campos que deseas actualizar
      };
  
      // Mantener campos inalterados
      const unchangedData = {
        email: this.userData?.email,
        fullName: this.userData?.fullName,
        puebloOriginario: this.userData?.puebloOriginario,
        birthdate: this.userData?.birthdate,
      };
      
      // Combinar ambos conjuntos de datos
      const mergedData = { ...unchangedData, ...newData };

      this.getUserData(); // Llama a la función que carga los datos del usuario

      this.gender = '';
      this.phoneNumber = '';
      this.sostenedorName = '';
      this.becas = 0;
  
      await this.serviceService.updateSpecificUserData(mergedData);
      this.isEditing = false; // Dejar de editar después de actualizar
    } catch (error) {

    }
  }



  mostrarMenu(){
    this.menuController.open('first')
  }
  

}
