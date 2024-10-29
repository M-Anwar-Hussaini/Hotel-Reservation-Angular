import { Injectable, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];
  constructor() {
    this.reservations = JSON.parse(
      localStorage.getItem('reservations') || '[]'
    );
  }

  getAllReservations(): Reservation[] {
    return this.reservations;
  }

  getSingleReservation(id: string): Reservation | undefined {
    return this.reservations.find((r) => r.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter((r) => r.id !== id);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, reservation: Reservation): void {
    const index = this.reservations.findIndex((r) => r.id === id);
    if (index) {
      reservation.id = id;
    }
    this.reservations[index] = reservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
