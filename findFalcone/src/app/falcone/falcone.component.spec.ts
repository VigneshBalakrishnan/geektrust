import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconeComponent } from './falcone.component';

describe('FalconeComponent', () => {
  let component: FalconeComponent;
  let fixture: ComponentFixture<FalconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
