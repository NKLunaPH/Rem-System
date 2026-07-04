import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss']
})
export class Settings {
  profile = {
    name: 'Nashville Khent',
    email: 'nashville@remsystem.com',
    role: 'Broker Admin'
  };

  preferences = [
    { label: 'Email notifications', enabled: true },
    { label: 'SMS reminders', enabled: false },
    { label: 'Weekly activity summary', enabled: true }
  ];
}
