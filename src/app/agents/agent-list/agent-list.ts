import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  region: string;
  activeListings: number;
  status: 'Active' | 'On Leave' | 'Inactive';
}

@Component({
  selector: 'app-agent-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './agent-list.html',
  styleUrls: ['./agent-list.scss']
})
export class AgentList {
  searchTerm = '';

  agents: Agent[] = [
    { id: 1, name: 'Ava Thompson', email: 'ava.t@example.com', phone: '+1 (555) 101-2020', region: 'West Coast', activeListings: 14, status: 'Active' },
    { id: 2, name: 'Lucas Reed', email: 'lucas.r@example.com', phone: '+1 (555) 303-4040', region: 'Midwest', activeListings: 9, status: 'On Leave' },
    { id: 3, name: 'Mia Carter', email: 'mia.c@example.com', phone: '+1 (555) 505-6060', region: 'East Coast', activeListings: 20, status: 'Active' },
    { id: 4, name: 'Ethan Brooks', email: 'ethan.b@example.com', phone: '+1 (555) 707-8080', region: 'South', activeListings: 6, status: 'Inactive' }
  ];

  get filteredAgents(): Agent[] {
    const query = this.searchTerm.toLowerCase().trim();
    if (!query) {
      return this.agents;
    }
    return this.agents.filter(agent =>
      agent.name.toLowerCase().includes(query) ||
      agent.email.toLowerCase().includes(query) ||
      agent.region.toLowerCase().includes(query)
    );
  }
}
