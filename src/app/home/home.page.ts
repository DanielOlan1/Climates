import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  selectedCity: string = ''; // Almacena el nombre de la ciudad seleccionada
  days: number = 3; // Número de días para el pronóstico

  forecastData: any; // Almacena los datos del pronóstico

  cities: string[] = ['Monterrey', 'Guadalajara', 'Ciudad de México']; // Agrega las ciudades que desees

  constructor(private weatherService: WeatherService) {}

  getForecast() {
    if (this.selectedCity) {
      this.weatherService.getForecastWeather(this.selectedCity, this.days)
        .subscribe(
          (forecast: any) => {
            this.forecastData = forecast;
          },
          (error: any) => {
            console.error('Error en la solicitud:', error);
          }
        );
    }
  }
}
