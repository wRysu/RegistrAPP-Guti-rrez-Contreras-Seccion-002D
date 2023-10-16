import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getTimeByTimeZone(timezone: string) {
    const apiUrl = `http://worldtimeapi.org/api/timezone/${timezone}`;
    return this.http.get(apiUrl);
  }
  
}