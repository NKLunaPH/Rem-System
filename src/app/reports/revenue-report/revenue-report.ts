import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface RevenueMetric {
  label: string;
  value: string;
  trend: string;
}

interface RevenueEntry {
  month: string;
  revenue: string;
  bookings: number;
}

@Component({
  selector: 'app-revenue-report',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './revenue-report.html',
  styleUrls: ['./revenue-report.scss']
})
export class RevenueReport {
  metrics: RevenueMetric[] = [
    { label: 'Gross Revenue', value: '$8.7M', trend: '+12.3%' },
    { label: 'Commission Income', value: '$1.24M', trend: '+7.8%' },
    { label: 'Average Monthly Revenue', value: '$725K', trend: '+4.1%' },
    { label: 'Outstanding Payouts', value: '$182K', trend: '-3.2%' }
  ];

  revenueData: RevenueEntry[] = [
    { month: 'Jan', revenue: '$610K', bookings: 9 },
    { month: 'Feb', revenue: '$675K', bookings: 10 },
    { month: 'Mar', revenue: '$720K', bookings: 12 },
    { month: 'Apr', revenue: '$690K', bookings: 11 },
    { month: 'May', revenue: '$760K', bookings: 13 },
    { month: 'Jun', revenue: '$825K', bookings: 14 }
  ];
}
