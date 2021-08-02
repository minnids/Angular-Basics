import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBonesComponent } from './hand-bones.component';

describe('HandBonesComponent', () => {
  let component: HandBonesComponent;
  let fixture: ComponentFixture<HandBonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandBonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
