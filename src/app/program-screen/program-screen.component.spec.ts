import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramScreenComponent } from './program-screen.component';

describe('ProgramScreenComponent', () => {
  let component: ProgramScreenComponent;
  let fixture: ComponentFixture<ProgramScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
