import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivarIdComponent } from './ativar-id.component';

describe('AtivarIdComponent', () => {
  let component: AtivarIdComponent;
  let fixture: ComponentFixture<AtivarIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivarIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
