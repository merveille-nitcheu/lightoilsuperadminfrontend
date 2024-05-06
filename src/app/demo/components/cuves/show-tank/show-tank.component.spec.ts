import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTankComponent } from './show-tank.component';

describe('ShowTankComponent', () => {
  let component: ShowTankComponent;
  let fixture: ComponentFixture<ShowTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
