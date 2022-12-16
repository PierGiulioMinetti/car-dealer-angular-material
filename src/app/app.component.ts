import { Component } from '@angular/core';
import { Car } from './core/models/car.models';
import { CarService } from './core/services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars!: Car[];

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {

    this.getCars();
  }

  getCars() {
    this.carService.fetchCars().subscribe((cars) => {
      console.log(cars);
      this.cars = cars;
    })
  }
}
