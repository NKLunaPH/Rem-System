import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCard } from '../property-card/property-card';
import { PropertyFilter } from '../property-filter/property-filter';

interface Property {
  id: number;
  title: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: string;
  imageUrl: string;
  location: string;
}

@Component({
  selector: 'app-property-list',
  imports: [CommonModule, PropertyCard, PropertyFilter],
  templateUrl: './property-list.html',
  styleUrl: './property-list.scss',
})
export class PropertyList {
  allProperties: Property[] = [
    {
      id: 1,
      title: 'Modern Glass Villa',
      price: 1250000,
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      status: 'Available',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Beverly Hills, CA'
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      price: 850000,
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      area: 1500,
      status: 'Sold',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'New York, NY'
    },
    {
      id: 3,
      title: 'Cozy Suburban Home',
      price: 450000,
      type: 'House',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      status: 'Available',
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Austin, TX'
    },
    {
      id: 4,
      title: 'Seaside Mansion',
      price: 3200000,
      type: 'House',
      bedrooms: 6,
      bathrooms: 5,
      area: 6000,
      status: 'Available',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Malibu, CA'
    }
  ];

  filteredProperties: Property[] = [...this.allProperties];

  onFilterChanged(filters: any) {
    this.filteredProperties = this.allProperties.filter(property => {
      let matches = true;

      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        matches = matches && (
          property.title.toLowerCase().includes(keyword) || 
          property.location.toLowerCase().includes(keyword)
        );
      }

      if (filters.type && filters.type !== 'All') {
        matches = matches && property.type === filters.type;
      }

      if (filters.minPrice) {
        matches = matches && property.price >= filters.minPrice;
      }

      if (filters.maxPrice) {
        matches = matches && property.price <= filters.maxPrice;
      }

      return matches;
    });
  }
}
