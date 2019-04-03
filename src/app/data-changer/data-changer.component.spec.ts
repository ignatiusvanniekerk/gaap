/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataChangerComponent } from './data-changer.component';

describe('DataChangerComponent', () => {
  let component: DataChangerComponent;
  let fixture: ComponentFixture<DataChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataChangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
