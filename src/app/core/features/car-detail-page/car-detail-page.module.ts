import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailPageRoutingModule } from './car-detail-page-routing.module';
import { CarDetailPageComponent } from './car-detail-page/car-detail-page.component';


@NgModule({
  declarations: [
    CarDetailPageComponent
  ],
  imports: [
    CommonModule,
    CarDetailPageRoutingModule
  ]
})
export class CarDetailPageModule { }
