import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agent-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agent-form.html',
  styleUrls: ['./agent-form.scss']
})
export class AgentForm {
  agentForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.agentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[+0-9\\s\\-()]+$')]],
      region: ['West Coast', Validators.required],
      role: ['Listing Agent', Validators.required],
      activeListings: [0, [Validators.required, Validators.min(0)]],
      status: ['Active', Validators.required],
      notes: ['', Validators.maxLength(500)]
    });
  }

  onSubmit() {
    if (this.agentForm.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        console.log('New Agent Registered:', this.agentForm.value);
        this.isSubmitting = false;
        this.agentForm.reset({ region: 'West Coast', role: 'Listing Agent', activeListings: 0, status: 'Active' });
      }, 1500);
    } else {
      Object.keys(this.agentForm.controls).forEach(key => {
        const control = this.agentForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
