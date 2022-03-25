import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPaginadoComponent } from './consultar-paginado.component';

describe('ConsultarPaginadoComponent', () => {
  let component: ConsultarPaginadoComponent;
  let fixture: ComponentFixture<ConsultarPaginadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPaginadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPaginadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
