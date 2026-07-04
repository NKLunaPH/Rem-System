import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface AppointmentEvent {
  date: string;
  time: string;
  client: string;
  agent: string;
  property: string;
  status: string;
}

@Component({
  selector: 'app-appointment-calendar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './appointment-calendar.html',
  styleUrls: ['./appointment-calendar.scss']
})
export class AppointmentCalendar {
  month = 'July 2026';
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays = Array.from({ length: 35 }, (_, index) => ({
    day: index < 3 ? '' : index - 2,
    active: index >= 3 && index - 2 <= 31,
    appointments: index === 4 ? 1 : index === 7 ? 2 : index === 11 ? 1 : index === 16 ? 1 : 0
  }));

  events: AppointmentEvent[] = [
    { date: '4 Jul', time: '10:00 AM', client: 'Michael Chen', agent: 'Ava Thompson', property: 'Modern Glass Villa', status: 'Confirmed' },
    { date: '7 Jul', time: '2:00 PM', client: 'Amanda Smith', agent: 'Lucas Reed', property: 'Downtown Penthouse', status: 'Pending' },
    { date: '7 Jul', time: '4:30 PM', client: 'William Davis', agent: 'Mia Carter', property: 'Cozy Suburban Home', status: 'Confirmed' },
    { date: '11 Jul', time: '11:30 AM', client: 'Jessica Taylor', agent: 'Ethan Brooks', property: 'Seaside Mansion', status: 'Cancelled' },
    { date: '16 Jul', time: '1:00 PM', client: 'Ava Thompson', agent: 'Ava Thompson', property: 'Downtown Penthouse', status: 'Confirmed' }
  ];
}
