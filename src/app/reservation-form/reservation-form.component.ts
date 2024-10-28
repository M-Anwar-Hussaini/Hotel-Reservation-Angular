import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styles: [],
})
export class ReservationFormComponent {
  reservationForm: FormGroup = new FormGroup({});
  onSubmit() {}
}
