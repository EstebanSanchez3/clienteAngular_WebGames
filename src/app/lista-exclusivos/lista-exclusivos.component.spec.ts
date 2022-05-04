import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExclusivosComponent } from './lista-exclusivos.component';

describe('ListaExclusivosComponent', () => {
  let component: ListaExclusivosComponent;
  let fixture: ComponentFixture<ListaExclusivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaExclusivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExclusivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
