import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuotkhachComponent } from './luotkhach.component';

describe('LuotkhachComponent', () => {
  let component: LuotkhachComponent;
  let fixture: ComponentFixture<LuotkhachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuotkhachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuotkhachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
