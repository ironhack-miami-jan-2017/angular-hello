import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTwoWayBindingComponent } from './my-two-way-binding.component';

describe('MyTwoWayBindingComponent', () => {
  let component: MyTwoWayBindingComponent;
  let fixture: ComponentFixture<MyTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
