import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonagensComponent } from './lista-personagens.component';

describe('ListaPersonagensComponent', () => {
  let component: ListaPersonagensComponent;
  let fixture: ComponentFixture<ListaPersonagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPersonagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
