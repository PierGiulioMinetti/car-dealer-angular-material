// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// COMPONENTS
import { CardComponent } from './components/card/card.component';
// MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ModalCarComponent } from './components/modal-car/modal-car.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

const COMPONENTS = [
  CardComponent
];

const MODULES = [
  ReactiveFormsModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule

]

@NgModule({
  declarations: [
    CardComponent,
    ModalCarComponent
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES,
    COMPONENTS
  ]
})
export class SharedModule { }
