import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdCompComponent } from './curd-comp.component';

describe('CurdCompComponent', () => {
  let component: CurdCompComponent;
  let fixture: ComponentFixture<CurdCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
