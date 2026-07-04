import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment-form.html',
  styleUrls: ['./appointment-form.scss']
})
export class AppointmentForm {
  appointmentForm: FormGroup;
  isSubmitting = false;

  agents = ['Ava Thompson', 'Lucas Reed', 'Mia Carter', 'Ethan Brooks'];
  buyers = ['Michael Chen', 'Amanda Smith', 'William Davis', 'Jessica Taylor'];
  properties = ['Modern Glass Villa', 'Downtown Penthouse', 'Cozy Suburban Home', 'Seaside Mansion'];
  statuses = ['Confirmed', 'Pending', 'Completed', 'Cancelled'];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      buyer: ['', Validators.required],
      agent: ['', Validators.required],
      property: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: ['Pending', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.appointmentForm.invalid) {
      Object.values(this.appointmentForm.controls).forEach(control => control.markAsTouched());
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      console.log('Appointment created', this.appointmentForm.value);
      this.appointmentForm.reset({ status: 'Pending' });
      this.isSubmitting = false;
    }, 1300);
  }
}
