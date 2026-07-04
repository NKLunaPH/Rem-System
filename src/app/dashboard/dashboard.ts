import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  stats = [
    { title: 'Total Properties', value: '124', trend: '+12%', isPositive: true, icon: 'home' },
    { title: 'Properties Sold', value: '45', trend: '+5%', isPositive: true, icon: 'check-circle' },
    { title: 'Total Revenue', value: '$4.2M', trend: '+18%', isPositive: true, icon: 'dollar-sign' },
    { title: 'Active Listings', value: '79', trend: '-2%', isPositive: false, icon: 'list' }
  ];

  recentActivities = [
    { action: 'New Property Listed', property: 'Modern Glass Villa', time: '2 hours ago', icon: 'plus', color: 'blue' },
    { action: 'Property Sold', property: 'Downtown Penthouse', time: '5 hours ago', icon: 'check', color: 'green' },
    { action: 'Price Updated', property: 'Cozy Suburban Home', time: '1 day ago', icon: 'edit', color: 'orange' },
    { action: 'New Inquiry', property: 'Seaside Mansion', time: '2 days ago', icon: 'message', color: 'purple' }
  ];
}
