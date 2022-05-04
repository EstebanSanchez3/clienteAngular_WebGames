import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivoComponent } from './exclusivo.component';

describe('ExclusivoComponent', () => {
  let component: ExclusivoComponent;
  let fixture: ComponentFixture<ExclusivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
