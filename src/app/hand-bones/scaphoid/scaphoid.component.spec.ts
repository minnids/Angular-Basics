import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaphoidComponent } from './scaphoid.component';

describe('ScaphoidComponent', () => {
  let component: ScaphoidComponent;
  let fixture: ComponentFixture<ScaphoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaphoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaphoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
