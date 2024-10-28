import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  getAllReservations(): Reservation[] {
    return this.reservations;
  }

  getSingleReservation(id: string): Reservation | undefined {
    return this.reservations.find((r) => r.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter((r) => r.id !== id);
  }

  updateReservation(reservation: Reservation): void {
    const index = this.reservations.findIndex((r) => r.id === reservation.id);
    this.reservations[index] = reservation;
  }
}
