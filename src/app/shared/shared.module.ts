// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// COMPONENTS
import { CardComponent } from './components/card/card.component';
// MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const COMPONENTS = [
  CardComponent
];

const MODULES = [
  MatCardModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    CardComponent
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
