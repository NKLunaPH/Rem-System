import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './payment-form.html',
  styleUrls: ['./payment-form.scss']
})
export class PaymentForm {
  paymentForm: FormGroup;
  isSubmitting = false;

  paymentMethods = ['Credit Card', 'Bank Transfer', 'Cash', 'Escrow'];
  statuses = ['Processed', 'Pending', 'Failed'];

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      transactionId: ['', [Validators.required, Validators.minLength(6)]],
      payerName: ['', [Validators.required, Validators.minLength(3)]],
      paymentMethod: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^\\$?\d{1,3}(,?\d{3})*(\.\d{2})?$')]],
      paymentDate: ['', Validators.required],
      paymentStatus: ['Processed', Validators.required],
      notes: ['', Validators.maxLength(300)]
    });
  }

  onSubmit() {
    if (this.paymentForm.invalid) {
      Object.values(this.paymentForm.controls).forEach(control => control.markAsTouched());
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      console.log('Payment submitted', this.paymentForm.value);
      this.paymentForm.reset({ paymentMethod: '', paymentStatus: 'Processed' });
      this.isSubmitting = false;
    }, 1300);
  }
}
