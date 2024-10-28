import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styles: [],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService
  ) {}

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);
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
