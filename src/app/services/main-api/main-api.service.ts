import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MainApiService {
  private apiUrl = 'https://api-football-v1.p.rapidapi.com/v3';
  private apiKey = '620139b92fmsh7ec2c379471c9e7p16aafcjsn1d9d247350d7';
 
  private headers: any = {
    'X-RapidAPI-Key': this.apiKey,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllLeagues() {
    return this.http.get<any>(`${this.apiUrl}/leagues`, { headers: this.headers });
  }
}
