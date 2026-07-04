import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seller-form.html',
  styleUrl: './seller-form.scss'
})
export class SellerForm {
  sellerForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.sellerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[+0-9\\s\\-()]+$')]],
      propertyTitle: ['', Validators.required],
      propertyAddress: ['', Validators.required],
      askingPrice: ['', [Validators.required, Validators.min(10000)]],
      propertyType: ['House', Validators.required],
      status: ['Active', Validators.required],
      notes: ['', Validators.maxLength(500)]
    });
  }

  onSubmit() {
    if (this.sellerForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        console.log('New Seller Registered:', this.sellerForm.value);
        this.isSubmitting = false;
        // this.sellerForm.reset({ propertyType: 'House', status: 'Active' });
      }, 1500);
    } else {
      Object.keys(this.sellerForm.controls).forEach(key => {
        const control = this.sellerForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
