import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicktingComponent } from './tickting.component';

describe('TicktingComponent', () => {
  let component: TicktingComponent;
  let fixture: ComponentFixture<TicktingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicktingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicktingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
