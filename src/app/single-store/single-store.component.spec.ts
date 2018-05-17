import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStoreComponent } from './single-store.component';

describe('SingleStoreComponent', () => {
  let component: SingleStoreComponent;
  let fixture: ComponentFixture<SingleStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
