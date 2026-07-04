import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buyer-profile',
  imports: [CommonModule],
  templateUrl: './buyer-profile.html',
  styleUrl: './buyer-profile.scss'
})
export class BuyerProfile {
  buyer = {
    id: 1,
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.c@example.com',
    phone: '+1 (555) 123-4567',
    budget: 1500000,
    interestedIn: 'Modern Villas',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    joinDate: 'Oct 12, 2023',
    lastContacted: '2 days ago',
    notes: 'Looking for a spacious modern villa with at least 4 bedrooms. Prefers quiet neighborhoods with good school districts. Very interested in properties with a pool and smart home features.'
  };

  recommendedProperties = [
    { id: 1, title: 'Modern Glass Villa', price: 1250000, location: 'Beverly Hills, CA', bedrooms: 4, bathrooms: 3, imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Seaside Mansion', price: 3200000, location: 'Malibu, CA', bedrooms: 6, bathrooms: 5, imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
  ];
}
