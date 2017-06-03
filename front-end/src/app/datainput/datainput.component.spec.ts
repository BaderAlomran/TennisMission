import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatainputComponent } from './datainput.component';

describe('DatainputComponent', () => {
  let component: DatainputComponent;
  let fixture: ComponentFixture<DatainputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatainputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatainputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
