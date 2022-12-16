import { Component } from '@angular/core';
import { Car } from './core/models/car.models';
import { CarService } from './core/services/car.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalCarComponent } from './shared/components/modal-car/modal-car.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars!: Car[];

  constructor(
    private carService: CarService,
    public dialog: MatDialog
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

  // with this method we open the dialog and when it close we subscribe to it and read the values
  openDialog() {
    const dialogRef = this.dialog.open(ModalCarComponent,
      {
        width: '50%',
        data: {
          brand: 'Bugatti',
          model: 'Veyron',
          price: 20000000,
          img: 'no',
          description: 'Bugatti Veyron V16'
        }
      }
    );


    dialogRef.afterClosed().subscribe(result => {
      console.table('result TABLE', result);
    });
  }
}
