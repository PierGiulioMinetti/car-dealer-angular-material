import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from '../models/car.models';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private URL = 'http://localhost:3000/cars';

  actualCar$ = new Subject();

  constructor(private http: HttpClient) { }

  //GET - all the cars
  fetchCars() {
    return this.http.get<Car[]>(this.URL);
  }

  //GET - single car
  fetchCar(id: number | undefined) {
    return this.http.get<Car>(`${this.URL}/${id}`);
  }


  //POST
  createCar(car: Car) {
    return this.http.post<Car>(this.URL, car)
  }
  //PUT
  editCar(id: number | undefined, car: Car | undefined) {
    return this.http.patch<Car>(`${this.URL}/${id}`, car)

  }
  //DELETE
  deleteCar(id: number | undefined) {
    return this.http.delete<Car>(`${this.URL}/${id}`)
  }


}
