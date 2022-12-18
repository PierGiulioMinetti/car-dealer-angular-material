import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/core/services/car.service';
import { Car } from '../../../core/models/car.models'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() car: Car | undefined;
  @Output() carToEdit = new EventEmitter<Car | undefined>();
  @Output() isPageToRefresh = new EventEmitter<boolean>();


  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editCar(car: Car | undefined) {
    console.log(this.car);
    this.carToEdit.emit(car);
  }

  deleteCar(id: number | undefined) {
    this.carService.deleteCar(id).subscribe(() => {
      console.log('car deleted!');

      this.isPageToRefresh.emit(true);
    })
  }

  goToDetailPage(id: number | undefined) {
    // alert(id);
    this.router.navigate(['./detail-page/' + id], { relativeTo: this.route });
  }

}
