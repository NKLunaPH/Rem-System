import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Seller {
  id: number;
  name: string;
  email: string;
  phone: string;
  propertyTitle: string;
  askingPrice: number;
  status: 'Active' | 'Under Contract' | 'Sold';
  avatar: string;
  listedDate: string;
}

@Component({
  selector: 'app-seller-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './seller-list.html',
  styleUrl: './seller-list.scss'
})
export class SellerList {
  searchTerm: string = '';
  
  allSellers: Seller[] = [
    { id: 1, name: 'Robert Johnson', email: 'robert.j@example.com', phone: '+1 (555) 345-6789', propertyTitle: 'Modern Glass Villa', askingPrice: 1250000, status: 'Active', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', listedDate: 'Oct 01, 2023' },
    { id: 2, name: 'Amanda Smith', email: 'amanda.s@example.com', phone: '+1 (555) 234-5678', propertyTitle: 'Downtown Penthouse', askingPrice: 850000, status: 'Sold', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', listedDate: 'Aug 15, 2023' },
    { id: 3, name: 'William Davis', email: 'wdavis@example.com', phone: '+1 (555) 456-7890', propertyTitle: 'Cozy Suburban Home', askingPrice: 450000, status: 'Active', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', listedDate: 'Nov 10, 2023' },
    { id: 4, name: 'Jessica Taylor', email: 'jtaylor@example.com', phone: '+1 (555) 789-0123', propertyTitle: 'Seaside Mansion', askingPrice: 3200000, status: 'Under Contract', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', listedDate: 'Sep 22, 2023' },
    { id: 5, name: 'Thomas Moore', email: 'thomas.m@example.com', phone: '+1 (555) 890-1234', propertyTitle: 'Rustic Country Cabin', askingPrice: 620000, status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', listedDate: 'Dec 05, 2023' }
  ];

  get filteredSellers(): Seller[] {
    if (!this.searchTerm) return this.allSellers;
    const term = this.searchTerm.toLowerCase();
    return this.allSellers.filter(seller => 
      seller.name.toLowerCase().includes(term) || 
      seller.email.toLowerCase().includes(term) ||
      seller.propertyTitle.toLowerCase().includes(term)
    );
  }
}
