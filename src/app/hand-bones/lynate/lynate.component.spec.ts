import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LynateComponent } from './lynate.component';

describe('LynateComponent', () => {
  let component: LynateComponent;
  let fixture: ComponentFixture<LynateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LynateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LynateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
