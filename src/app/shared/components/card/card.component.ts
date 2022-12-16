import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Car } from '../../../core/models/car.models'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() car: Car | undefined;
  @Output() carToEdit = new EventEmitter<Car | undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  editCar(car: Car | undefined) {
    console.log(this.car);
    this.carToEdit.emit(car);
  }


}
