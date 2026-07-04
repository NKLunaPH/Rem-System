import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProfile } from './buyer-profile';

describe('BuyerProfile', () => {
  let component: BuyerProfile;
  let fixture: ComponentFixture<BuyerProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyerProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
