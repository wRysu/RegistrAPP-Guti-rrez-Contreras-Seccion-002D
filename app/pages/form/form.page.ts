import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { NavController } from '@ionic/angular';





@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})



export class FormPage implements OnInit {


  registrationForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      clases: [[], [Validators.required, this.validaClase]],
      semestre: [[],[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  validaClase(control: FormControl) {
    const clases = control.value as string[];
    if (clases && clases.length === 2) {
      return null; // La validación es exitosa
    }
    return { selectwoClases: true }; // La validación falla
  }

  ngOnInit(){}
  
  
  register() {
    // Realiza las validaciones del formulario
  
    // Almacenar los datos en el localStorage
    localStorage.setItem('userData', JSON.stringify({
      username: this.registrationForm.value.username,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      clases: this.registrationForm.value.clases,
      semestre:this.registrationForm.value.semestre
    }));
  
    // Redirigir al usuario a la página de inicio de sesión
    this.navCtrl.navigateForward('/login');
  }
  


}