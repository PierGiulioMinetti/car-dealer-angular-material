import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-car',
  templateUrl: './modal-car.component.html',
  styleUrls: ['./modal-car.component.scss']
})
export class ModalCarComponent implements OnInit {

  carForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.carForm = fb.group({
      brand: [null, Validators.required],
      model: [null, Validators.required],
      price: [null, Validators.required],
      img: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.carForm.getRawValue());


  }
}
