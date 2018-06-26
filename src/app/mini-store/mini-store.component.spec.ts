import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniStoreComponent } from './mini-store.component';

describe('MiniStoreComponent', () => {
  let component: MiniStoreComponent;
  let fixture: ComponentFixture<MiniStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
