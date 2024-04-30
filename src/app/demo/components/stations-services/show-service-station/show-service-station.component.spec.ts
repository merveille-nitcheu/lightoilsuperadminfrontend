import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServiceStationComponent } from './show-service-station.component';

describe('ShowServiceStationComponent', () => {
  let component: ShowServiceStationComponent;
  let fixture: ComponentFixture<ShowServiceStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowServiceStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowServiceStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
