import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SalesSummary {
  label: string;
  value: string;
  change: string;
}

interface SalesEntry {
  id: string;
  client: string;
  property: string;
  agent: string;
  date: string;
  amount: string;
  status: string;
}

@Component({
  selector: 'app-sales-report',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sales-report.html',
  styleUrls: ['./sales-report.scss']
})
export class SalesReport {
  summary: SalesSummary[] = [
    { label: 'Total Sales', value: '$12.4M', change: '+18.2%' },
    { label: 'Closed Deals', value: '48', change: '+9 deals' },
    { label: 'Avg. Deal Size', value: '$258K', change: '+6.4%' },
    { label: 'Pending Deals', value: '14', change: '-2 deals' }
  ];

  sales: SalesEntry[] = [
    { id: 'S-1001', client: 'Michael Chen', property: 'Modern Glass Villa', agent: 'Ava Thompson', date: 'Jun 28', amount: '$3.2M', status: 'Closed' },
    { id: 'S-1002', client: 'Amanda Smith', property: 'Downtown Penthouse', agent: 'Lucas Reed', date: 'Jun 30', amount: '$1.45M', status: 'Pending' },
    { id: 'S-1003', client: 'Jessica Taylor', property: 'Seaside Mansion', agent: 'Ethan Brooks', date: 'Jul 02', amount: '$4.9M', status: 'Closed' },
    { id: 'S-1004', client: 'William Davis', property: 'Cozy Suburban Home', agent: 'Mia Carter', date: 'Jul 04', amount: '$0.85M', status: 'In Review' }
  ];
}
