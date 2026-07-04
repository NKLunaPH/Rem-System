import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-details',
  imports: [CommonModule],
  templateUrl: './property-details.html',
  styleUrl: './property-details.scss'
})
export class PropertyDetails {
  property = {
    id: 1,
    title: 'Modern Glass Villa',
    price: 1250000,
    type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    status: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    location: '123 Beverly Hills, CA 90210',
    description: 'Experience luxury living in this stunning modern glass villa. Designed by award-winning architects, this property features an open-concept layout that seamlessly blends indoor and outdoor spaces. Enjoy breathtaking panoramic views, a state-of-the-art chef\'s kitchen, a private infinity pool, and a master suite that defines opulence. Perfect for entertaining or a serene private retreat.',
    amenities: ['Infinity Pool', 'Smart Home System', 'Chef\'s Kitchen', 'Wine Cellar', 'Home Theater', '3-Car Garage'],
    agent: {
      name: 'Sarah Jenkins',
      phone: '+1 (555) 123-4567',
      email: 'sarah.j@remsystem.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  };
}
