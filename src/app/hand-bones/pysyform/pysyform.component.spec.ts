import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PysyformComponent } from './pysyform.component';

describe('PysyformComponent', () => {
  let component: PysyformComponent;
  let fixture: ComponentFixture<PysyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PysyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PysyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
