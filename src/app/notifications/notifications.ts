import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NotificationItem {
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.scss']
})
export class Notifications {
  notifications: NotificationItem[] = [
    { title: 'New appointment booked', message: 'A client scheduled a showing for the Modern Glass Villa.', time: '5 min ago', unread: true },
    { title: 'Payment received', message: 'A deposit for the Downtown Penthouse was successfully processed.', time: '1 hr ago', unread: true },
    { title: 'Offer reviewed', message: 'The offer for Seaside Mansion is now under review.', time: '3 hrs ago', unread: false },
    { title: 'Agent update', message: 'Ava Thompson completed the latest listing walkthrough.', time: 'Yesterday', unread: false }
  ];
}
