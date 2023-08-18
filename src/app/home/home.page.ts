import { Component, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit{
  selectedCity: string = ''; // Almacena el nombre de la ciudad seleccionada
  days: number = 7; // Número de días para el pronóstico

 forecastData: any; // Almacena los datos del pronóstico

  cities: string[] = [
    'Monterrey',
    'Guadalupe',
    'San Nicolas de los Garza',
    'Apodaca',
    'General Escobedo',
    'Santa Catarina',
    'San Pedro Garza García',
    'Juarez',
    'Cadereyta Jimenez',
    'Garcia',
    'Santiago',
    'San Juan Nepomuceno',
    'Salinas Victoria',
    'Allende',
    'General Zuazua',
    'Hidalgo',
    'Pesqueria',
    'Doctor Arroyo',
    'Montemorelos',
    'Linares',
    'General Teran',
    'Sabinas Hidalgo',
    'China',
    'Cerralvo',
    'Mina',
    'General Bravo',
    'Abasolo',
    'Cienega de Flores',
    'Hualahuises',
    'Villaldama'
  ];


  constructor(private weatherService: WeatherService) {
    // Obtener la última ciudad buscada del almacenamiento local
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      this.selectedCity = lastCity;
      this.getForecast(); // Obtener el pronóstico para la última ciudad buscada
    }
  }
  ngOnInit(): void {
  this.getForecast();
  this
  }
  
  shouldShowClouds(): boolean {
    const cloudValue = this.forecastData?.current?.cloud; // Obtén el valor de cloud
    return cloudValue >= 1 && cloudValue <= 99;
  }
  
  getForecast() {
    if (this.selectedCity) {
      this.weatherService.getForecastWeather(this.selectedCity, this.days)
        .subscribe(
          (forecast: any) => {
            this.forecastData = forecast;
  
            // Guardar la última ciudad buscada en el almacenamiento local
            localStorage.setItem('lastCity', this.selectedCity);
          },
          (error: any) => {
            console.error('Error en la solicitud:', error);
          }
        );
    }
  }
  
}
