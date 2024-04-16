import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStationServiceComponent } from './add-station-service.component';

describe('AddStationServiceComponent', () => {
  let component: AddStationServiceComponent;
  let fixture: ComponentFixture<AddStationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStationServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
