import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';

const COMPONENTS = [
  CardComponent
];

const MODULES = [
  MatCardModule
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
