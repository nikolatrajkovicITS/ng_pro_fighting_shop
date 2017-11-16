import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmaComponent } from './mma.component';

describe('MmaComponent', () => {
  let component: MmaComponent;
  let fixture: ComponentFixture<MmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
