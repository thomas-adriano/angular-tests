import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtBComponent } from './ft-b.component';

describe('FtBComponent', () => {
  let component: FtBComponent;
  let fixture: ComponentFixture<FtBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
