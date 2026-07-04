import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buyer-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './buyer-form.html',
  styleUrl: './buyer-form.scss'
})
export class BuyerForm {
  buyerForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.buyerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[+0-9\\s\\-()]+$')]],
      budget: ['', [Validators.required, Validators.min(10000)]],
      interestedIn: ['Modern Villas', Validators.required],
      status: ['Active', Validators.required],
      notes: ['', Validators.maxLength(500)]
    });
  }

  onSubmit() {
    if (this.buyerForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        console.log('New Buyer Registered:', this.buyerForm.value);
        this.isSubmitting = false;
        // this.buyerForm.reset({ interestedIn: 'Modern Villas', status: 'Active' });
      }, 1500);
    } else {
      Object.keys(this.buyerForm.controls).forEach(key => {
        const control = this.buyerForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
