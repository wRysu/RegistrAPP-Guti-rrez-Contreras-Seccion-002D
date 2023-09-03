import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first')
  }
}
