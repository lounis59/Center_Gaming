import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCenterGamingComponent } from './footer-center-gaming.component';

describe('FooterCenterGamingComponent', () => {
  let component: FooterCenterGamingComponent;
  let fixture: ComponentFixture<FooterCenterGamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterCenterGamingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterCenterGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
