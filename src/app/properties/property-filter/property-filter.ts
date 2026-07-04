import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-filter',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './property-filter.html',
  styleUrl: './property-filter.scss'
})
export class PropertyFilter {
  @Output() filterChanged = new EventEmitter<any>();
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      keyword: [''],
      type: ['All'],
      minPrice: [''],
      maxPrice: ['']
    });
  }

  applyFilter() {
    this.filterChanged.emit(this.filterForm.value);
  }

  resetFilter() {
    this.filterForm.reset({ type: 'All' });
    this.filterChanged.emit(this.filterForm.value);
  }
}
