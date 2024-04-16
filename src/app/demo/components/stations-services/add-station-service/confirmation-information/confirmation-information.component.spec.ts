import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationInformationComponent } from './confirmation-information.component';

describe('ConfirmationInformationComponent', () => {
  let component: ConfirmationInformationComponent;
  let fixture: ComponentFixture<ConfirmationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
