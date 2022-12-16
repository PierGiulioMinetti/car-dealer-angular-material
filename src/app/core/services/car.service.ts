import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car.models';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private URL = 'http://localhost:3000/cars'

  constructor(private http: HttpClient) { }

  fetchCars() {
    return this.http.get<Car[]>(this.URL);
  }
}
