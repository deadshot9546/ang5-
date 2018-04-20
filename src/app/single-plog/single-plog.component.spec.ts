import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlogComponent } from './single-plog.component';

describe('SinglePlogComponent', () => {
  let component: SinglePlogComponent;
  let fixture: ComponentFixture<SinglePlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
