import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIdComponent } from './listar-id.component';

describe('ListarIdComponent', () => {
  let component: ListarIdComponent;
  let fixture: ComponentFixture<ListarIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
