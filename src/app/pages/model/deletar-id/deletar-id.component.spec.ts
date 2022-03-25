import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarIdComponent } from './deletar-id.component';

describe('DeletarIdComponent', () => {
  let component: DeletarIdComponent;
  let fixture: ComponentFixture<DeletarIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
