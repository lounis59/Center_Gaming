import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlateformComponent } from './page-plateform.component';

describe('PagePlateformComponent', () => {
  let component: PagePlateformComponent;
  let fixture: ComponentFixture<PagePlateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePlateformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePlateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
