import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ReceiptItem {
  description: string;
  amount: string;
}

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './receipt.html',
  styleUrls: ['./receipt.scss']
})
export class Receipt {
  receiptNumber = 'RCT-7654';
  transactionId = 'TRX-1024';
  date = 'Jul 03, 2026';
  payerName = 'Michael Chen';
  payeeName = 'Jordan Smith';
  property = 'Modern Glass Villa';
  paymentMethod = 'Bank Transfer';
  total = '$3,200,000';

  items: ReceiptItem[] = [
    { description: 'Sale Price', amount: '$3,000,000' },
    { description: 'Brokerage Fee', amount: '$120,000' },
    { description: 'Closing Costs', amount: '$80,000' }
  ];
}
