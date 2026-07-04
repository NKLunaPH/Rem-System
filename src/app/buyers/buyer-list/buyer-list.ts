import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Buyer {
  id: number;
  name: string;
  email: string;
  phone: string;
  budget: number;
  interestedIn: string;
  status: 'Active' | 'Pending' | 'Inactive';
  avatar: string;
  joinDate: string;
}

@Component({
  selector: 'app-buyer-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './buyer-list.html',
  styleUrl: './buyer-list.scss'
})
export class BuyerList {
  searchTerm: string = '';
  
  allBuyers: Buyer[] = [
    { id: 1, name: 'Michael Chen', email: 'michael.c@example.com', phone: '+1 (555) 123-4567', budget: 1500000, interestedIn: 'Modern Villas', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', joinDate: 'Oct 12, 2023' },
    { id: 2, name: 'Emily Rodriguez', email: 'emily.r@example.com', phone: '+1 (555) 987-6543', budget: 800000, interestedIn: 'Downtown Apartments', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', joinDate: 'Nov 05, 2023' },
    { id: 3, name: 'James Wilson', email: 'j.wilson@example.com', phone: '+1 (555) 456-7890', budget: 3200000, interestedIn: 'Luxury Estates', status: 'Active', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', joinDate: 'Nov 18, 2023' },
    { id: 4, name: 'Sarah Thompson', email: 'sarah.t@example.com', phone: '+1 (555) 789-0123', budget: 450000, interestedIn: 'Suburban Homes', status: 'Inactive', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', joinDate: 'Dec 02, 2023' },
    { id: 5, name: 'David Kim', email: 'dkim@example.com', phone: '+1 (555) 234-5678', budget: 1200000, interestedIn: 'Commercial Properties', status: 'Active', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80', joinDate: 'Jan 15, 2024' }
  ];

  get filteredBuyers(): Buyer[] {
    if (!this.searchTerm) return this.allBuyers;
    const term = this.searchTerm.toLowerCase();
    return this.allBuyers.filter(buyer => 
      buyer.name.toLowerCase().includes(term) || 
      buyer.email.toLowerCase().includes(term) ||
      buyer.interestedIn.toLowerCase().includes(term)
    );
  }
}
