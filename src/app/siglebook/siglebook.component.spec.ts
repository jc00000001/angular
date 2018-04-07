import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiglebookComponent } from './siglebook.component';

describe('SiglebookComponent', () => {
  let component: SiglebookComponent;
  let fixture: ComponentFixture<SiglebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiglebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiglebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
