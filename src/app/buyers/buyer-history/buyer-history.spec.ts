import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerHistory } from './buyer-history';

describe('BuyerHistory', () => {
  let component: BuyerHistory;
  let fixture: ComponentFixture<BuyerHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyerHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
