import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Car } from 'src/app/core/models/car.models';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.scss']
})
export class CarDetailPageComponent implements OnInit {

  car!: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.listenToRoute();
  }

  listenToRoute() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      console.log('id: ', id);

      this.carService.fetchCar(id).subscribe((car) => {
        console.log('detail page car:', car);
        this.car = car;
      })

    })
  }

}
