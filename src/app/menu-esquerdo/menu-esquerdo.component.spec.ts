import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEsquerdoComponent } from './menu-esquerdo.component';

describe('MenuEsquerdoComponent', () => {
  let component: MenuEsquerdoComponent;
  let fixture: ComponentFixture<MenuEsquerdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEsquerdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
