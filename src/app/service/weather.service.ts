import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl: string = environment.apiUrl;
  private key: string = environment.key;
  private host: string = environment.host;

  constructor(private http: HttpClient) {}

  getForecastWeather(city: string, days: number): any {
    const url = '/forecast.json';
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.key,
      'X-RapidAPI-Host': this.host
    });

    const params = new HttpParams()
      .set('q', city)
      .set('days', days.toString());

    return this.http.get(`${this.apiUrl}${url}`, { headers, params });
  }
}
