import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Transaction {
  id: string;
  date: string;
  agent: string;
  seller: string;
  buyer: string;
  property: string;
  amount: string;
  status: 'Closed' | 'Pending' | 'In Escrow';
}

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './transaction-list.html',
  styleUrls: ['./transaction-list.scss']
})
export class TransactionList {
  searchTerm = '';

  transactions: Transaction[] = [
    { id: 'TRX-1024', date: 'Jun 28, 2026', agent: 'Ava Thompson', seller: 'Jordan Smith', buyer: 'Michael Chen', property: 'Modern Glass Villa', amount: '$3,200,000', status: 'Closed' },
    { id: 'TRX-1025', date: 'Jun 30, 2026', agent: 'Lucas Reed', seller: 'Natalie Young', buyer: 'Amanda Smith', property: 'Downtown Penthouse', amount: '$1,450,000', status: 'In Escrow' },
    { id: 'TRX-1026', date: 'Jul 02, 2026', agent: 'Mia Carter', seller: 'Carlos Rivera', buyer: 'Jessica Taylor', property: 'Cozy Suburban Home', amount: '$850,000', status: 'Pending' },
    { id: 'TRX-1027', date: 'Jul 04, 2026', agent: 'Ethan Brooks', seller: 'Sophie Adams', buyer: 'William Davis', property: 'Seaside Mansion', amount: '$4,900,000', status: 'Closed' }
  ];

  get filteredTransactions(): Transaction[] {
    const query = this.searchTerm.toLowerCase().trim();
    if (!query) return this.transactions;

    return this.transactions.filter(tx =>
      tx.id.toLowerCase().includes(query) ||
      tx.date.toLowerCase().includes(query) ||
      tx.agent.toLowerCase().includes(query) ||
      tx.seller.toLowerCase().includes(query) ||
      tx.buyer.toLowerCase().includes(query) ||
      tx.property.toLowerCase().includes(query) ||
      tx.amount.toLowerCase().includes(query) ||
      tx.status.toLowerCase().includes(query)
    );
  }
}
