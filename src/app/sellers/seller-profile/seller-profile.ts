import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seller-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './seller-profile.html',
  styleUrl: './seller-profile.scss'
})
export class SellerProfile {
  seller = {
    id: 1,
    firstName: 'Robert',
    lastName: 'Johnson',
    email: 'robert.j@example.com',
    phone: '+1 (555) 345-6789',
    propertyTitle: 'Modern Glass Villa',
    propertyType: 'Luxury Villa',
    askingPrice: 1250000,
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    listedDate: 'Oct 01, 2023',
    lastUpdated: '5 days ago',
    location: 'Beverly Hills, CA',
    bedrooms: 4,
    bathrooms: 3,
    lotSize: '0.42 acres',
    notes: 'Seller is motivated and prefers a fast closing. The property has been staged and is ready for private showings.'
  };

  listingHighlights = [
    { label: 'Listing Type', value: 'Exclusive Agency' },
    { label: 'Annual Taxes', value: '$14,200' },
    { label: 'Home Warranty', value: 'Included' },
    { label: 'Showing Availability', value: '24/7' }
  ];

  recentActivity = [
    'Open house scheduled for Saturday at 1:00 PM',
    'Price adjustment reviewed with seller',
    'New buyer inquiry received from a relocation client'
  ];
}
