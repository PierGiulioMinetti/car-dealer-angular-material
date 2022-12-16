import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/core/models/car.models';


@Component({
  selector: 'app-modal-car',
  templateUrl: './modal-car.component.html',
  styleUrls: ['./modal-car.component.scss']
})
export class ModalCarComponent implements OnInit {

  carForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car
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

    this.setFormValue();
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

  setFormValue() {
    if (this.data) {
      this.carForm.controls['brand'].patchValue(this.data.brand);
      this.carForm.controls['model'].patchValue(this.data.model);
      this.carForm.controls['img'].patchValue(this.data.img);
      this.carForm.controls['price'].patchValue(this.data.price);
      this.carForm.controls['description'].patchValue(this.data.description);
    }
  }
}
