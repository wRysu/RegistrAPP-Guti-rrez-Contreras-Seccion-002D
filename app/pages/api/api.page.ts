import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http'

import { ApiService } from 'src/app/services/api.service'; 

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  timezone: string = 'America/Santiago';
  timeData: any;
  formattedTime: string='';

  constructor(private menuController: MenuController,
    private apiService: ApiService,
    private http: HttpClient) {

    }

ngOnInit() {
// Iniciar una actualización periódica cada segundo
this.updateTime();
setInterval(() => this.updateTime(), 1000);
}

updateTime() {
  this.apiService.getTimeByTimeZone(this.timezone).subscribe((data) => {
  this.timeData = data;
  // Extraer las partes de la hora  
  const dateTime = new Date(this.timeData.utc_datetime);
  const hours = dateTime.getUTCHours();
  const minutes = dateTime.getUTCMinutes();
  const seconds = dateTime.getUTCSeconds();
  // Formatear la hora
  this.formattedTime = `${hours}:${minutes}:${seconds}`;
});

}

}
