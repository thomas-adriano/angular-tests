import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtAComponent } from './ft-a.component';

describe('FtAComponent', () => {
  let component: FtAComponent;
  let fixture: ComponentFixture<FtAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
