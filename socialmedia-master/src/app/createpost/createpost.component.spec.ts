import { ComponentFixture, TestBed } from '@angular/core/testing';

import { createpostComponent } from './createpost.component';

describe('createpostComponent', () => {
  let component: createpostComponent;
  let fixture: ComponentFixture<createpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ createpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(createpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
