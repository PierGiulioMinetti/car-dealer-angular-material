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
      }
    );


    dialogRef.afterClosed().subscribe(carFromForm => {
      console.table('result TABLE', carFromForm);


    });
  }


  //fetch as @Output() the car to send to the dialog to be edited
  getCarToEdit(carToEdit: Car | undefined) {
    console.log('edit car method (parent)', carToEdit);

    const dialogRef = this.dialog.open(ModalCarComponent,
      {
        width: '50%',
        data: carToEdit
      }
    );


    dialogRef.afterClosed().subscribe(carFromForm => {
      this.carService.editCar(carFromForm.id, carFromForm).subscribe((res) => {
        console.log('edited CORRECTLY!!!');

      })
    });
  }
}
