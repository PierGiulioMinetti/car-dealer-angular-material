import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-car',
  templateUrl: './modal-car.component.html',
  styleUrls: ['./modal-car.component.scss']
})
export class ModalCarComponent implements OnInit {

  carForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalCarComponent>
  ) {
    this.carForm = fb.group({
      brand: [null],
      model: [null],
      price: [null],
      img: [null],
      description: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let formsValue = this.carForm.getRawValue()

    //to pass to the dialog the values of the form
    this.closeDialog(formsValue)
  }

  //method to close the dialog (we pass a parameter that will be the forms value)
  closeDialog(formsValue: {}) {
    this.dialogRef.close(formsValue);
  }
}
