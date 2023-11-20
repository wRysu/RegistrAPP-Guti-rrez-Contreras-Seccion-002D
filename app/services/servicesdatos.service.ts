import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesdatosService {
  users = User[];

  constructor() { }

  this.users = [
    {email: 'Matias@duocuc.cl',password : '1234'},
  ];
}
