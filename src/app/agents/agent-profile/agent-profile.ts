import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface AgentProfileModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  region: string;
  role: string;
  activeListings: number;
  status: 'Active' | 'On Leave' | 'Inactive';
  topPerformingArea: string;
  yearsOnTeam: number;
  notes: string;
  avatar: string;
}

const AGENTS: AgentProfileModel[] = [
  { id: 1, name: 'Ava Thompson', email: 'ava.t@example.com', phone: '+1 (555) 101-2020', region: 'West Coast', role: 'Listing Agent', activeListings: 14, status: 'Active', topPerformingArea: 'Los Angeles', yearsOnTeam: 6, notes: 'Ava consistently closes high-end listings across coastal markets and works closely with buyers seeking premium homes.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Lucas Reed', email: 'lucas.r@example.com', phone: '+1 (555) 303-4040', region: 'Midwest', role: 'Buyer Agent', activeListings: 9, status: 'On Leave', topPerformingArea: 'Chicago', yearsOnTeam: 4, notes: 'Lucas is currently on leave but remains the top buyer specialist for first-time homebuyers in the greater Chicago metro.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Mia Carter', email: 'mia.c@example.com', phone: '+1 (555) 505-6060', region: 'East Coast', role: 'Team Lead', activeListings: 20, status: 'Active', topPerformingArea: 'New York', yearsOnTeam: 8, notes: 'Mia leads the East Coast team, coordinating luxury listings and mentoring junior agents through every stage of the sale.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Ethan Brooks', email: 'ethan.b@example.com', phone: '+1 (555) 707-8080', region: 'South', role: 'Support Specialist', activeListings: 6, status: 'Inactive', topPerformingArea: 'Atlanta', yearsOnTeam: 3, notes: 'Ethan focuses on client support and back-office operations, ensuring transactions move smoothly behind the scenes.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
];

@Component({
  selector: 'app-agent-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './agent-profile.html',
  styleUrls: ['./agent-profile.scss']
})
export class AgentProfile {
  private readonly route = inject(ActivatedRoute);
  agent: AgentProfileModel;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id')) || 1;
    this.agent = AGENTS.find(agent => agent.id === id) ?? AGENTS[0];
  }
}
