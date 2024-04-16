import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationServiceListComponent } from './station-service-list.component';

describe('StationServiceListComponent', () => {
  let component: StationServiceListComponent;
  let fixture: ComponentFixture<StationServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationServiceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
