import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../../firebase/service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})



export class FormPage implements OnInit {

  email: string = '';
  password: string = '';
  fullName: string = '';
  phoneNumber: string ='' ;
  gender: string = ''; // Nuevo campo para el género
  becas: string = ''; // Nuevo campo para becas
  birthdate: string = ''; // Nuevo campo para la fecha de nacimieto
  puebloOriginario:string = '';
  sostenedorName:string = '';
  
  constructor(private serviceService:ServiceService,  private router: Router) {


  }

  ngOnInit(){

  } 
  
  async registerUser() {
    try {
      const credentials = await this.serviceService.registerUser(this.email, this.password);
      console.log(credentials);

      // Registro exitoso, ahora puedes guardar los datos del formulario
      await this.serviceService.saveFormData(
        this.fullName,
        this.phoneNumber,
        this.email,
        this.gender,
        this.becas,
        this.birthdate,
        this.sostenedorName,
        this.puebloOriginario
      );
      
      this.router.navigate(['/login']);

    } catch (error) {
      console.error(error);
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  }
  
}




  

