import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styles: [],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  title: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      guestName: ['', Validators.required],
      roomNumber: ['', Validators.required],
    });
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.title = 'Edit Reservation';
      const reservation = this.reservationService.getSingleReservation(id);
      if (reservation) this.reservationForm.patchValue(reservation);
    } else {
      this.title = 'Create New Reservation';
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation = this.reservationForm.value;
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.reservationService.updateReservation(id, reservation);
      } else {
        this.reservationService.addReservation(reservation);
      }

      this.router.navigate(['/list']);
    } else {
      console.log('Invalid');
    }
  }
}
