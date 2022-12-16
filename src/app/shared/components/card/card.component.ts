import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../core/models/car.models'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() car: Car | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
