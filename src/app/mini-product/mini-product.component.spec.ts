import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProductComponent } from './mini-product.component';

describe('MiniProductComponent', () => {
  let component: MiniProductComponent;
  let fixture: ComponentFixture<MiniProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
