import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './property-form.html',
  styleUrl: './property-form.scss',
})
export class PropertyForm {
  propertyForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(1)]],
      type: ['House', Validators.required],
      status: ['Available', Validators.required],
      bedrooms: ['', [Validators.required, Validators.min(0)]],
      bathrooms: ['', [Validators.required, Validators.min(0)]],
      area: ['', [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      description: ['', Validators.maxLength(500)],
      imageUrl: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        console.log('Form Submitted', this.propertyForm.value);
        this.isSubmitting = false;
        // Optional: this.propertyForm.reset();
      }, 1500);
    } else {
      Object.keys(this.propertyForm.controls).forEach(key => {
        const control = this.propertyForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
