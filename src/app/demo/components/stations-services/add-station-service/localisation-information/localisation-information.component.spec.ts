import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationInformationComponent } from './localisation-information.component';

describe('LocalisationInformationComponent', () => {
  let component: LocalisationInformationComponent;
  let fixture: ComponentFixture<LocalisationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalisationInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalisationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
