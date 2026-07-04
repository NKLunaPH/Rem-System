import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HistoryEvent {
  id: number;
  type: 'Viewing' | 'Offer' | 'Message' | 'StatusChange';
  title: string;
  description: string;
  date: string;
  time: string;
  iconColor: string;
}

@Component({
  selector: 'app-buyer-history',
  imports: [CommonModule],
  templateUrl: './buyer-history.html',
  styleUrl: './buyer-history.scss'
})
export class BuyerHistory {
  buyerName = 'Michael Chen';
  
  historyEvents: HistoryEvent[] = [
    {
      id: 1,
      type: 'Offer',
      title: 'Offer Submitted',
      description: 'Submitted an offer for $1,200,000 on Modern Glass Villa.',
      date: 'Today',
      time: '10:30 AM',
      iconColor: 'blue'
    },
    {
      id: 2,
      type: 'Viewing',
      title: 'Property Viewing',
      description: 'Attended a private viewing of Modern Glass Villa with Agent Sarah.',
      date: 'Yesterday',
      time: '2:15 PM',
      iconColor: 'green'
    },
    {
      id: 3,
      type: 'Message',
      title: 'Email Sent',
      description: 'Sent follow-up email regarding the property viewing schedule.',
      date: 'Oct 15, 2023',
      time: '09:00 AM',
      iconColor: 'purple'
    },
    {
      id: 4,
      type: 'StatusChange',
      title: 'Status Updated',
      description: 'Buyer status changed from Pending to Active.',
      date: 'Oct 12, 2023',
      time: '4:45 PM',
      iconColor: 'orange'
    },
    {
      id: 5,
      type: 'Message',
      title: 'Initial Contact',
      description: 'Buyer registered via the website contact form.',
      date: 'Oct 12, 2023',
      time: '1:20 PM',
      iconColor: 'gray'
    }
  ];
}
