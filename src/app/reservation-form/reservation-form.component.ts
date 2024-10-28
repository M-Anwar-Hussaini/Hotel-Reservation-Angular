import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styles: [],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log('valid');
    } else {
      console.log('Invalid');
    }
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      guestName: ['', Validators.required],
      roomNumber: ['', Validators.required],
    });
  }
}
