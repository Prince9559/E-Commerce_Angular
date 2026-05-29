import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppliances } from './home-appliances';

describe('HomeAppliances', () => {
  let component: HomeAppliances;
  let fixture: ComponentFixture<HomeAppliances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAppliances],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAppliances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
