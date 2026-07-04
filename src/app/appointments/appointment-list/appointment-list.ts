import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Appointment {
  id: number;
  client: string;
  agent: string;
  property: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
}

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './appointment-list.html',
  styleUrls: ['./appointment-list.scss']
})
export class AppointmentList {
  searchTerm = '';

  appointments: Appointment[] = [
    { id: 1, client: 'Michael Chen', agent: 'Ava Thompson', property: 'Modern Glass Villa', date: 'Jul 10, 2026', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, client: 'Amanda Smith', agent: 'Lucas Reed', property: 'Downtown Penthouse', date: 'Jul 12, 2026', time: '2:00 PM', status: 'Pending' },
    { id: 3, client: 'William Davis', agent: 'Mia Carter', property: 'Cozy Suburban Home', date: 'Jul 14, 2026', time: '11:30 AM', status: 'Completed' },
    { id: 4, client: 'Jessica Taylor', agent: 'Ethan Brooks', property: 'Seaside Mansion', date: 'Jul 18, 2026', time: '4:00 PM', status: 'Cancelled' }
  ];

  get filteredAppointments(): Appointment[] {
    const query = this.searchTerm.toLowerCase().trim();
    if (!query) return this.appointments;

    return this.appointments.filter(appointment =>
      appointment.client.toLowerCase().includes(query) ||
      appointment.agent.toLowerCase().includes(query) ||
      appointment.property.toLowerCase().includes(query) ||
      appointment.date.toLowerCase().includes(query) ||
      appointment.status.toLowerCase().includes(query)
    );
  }
}
