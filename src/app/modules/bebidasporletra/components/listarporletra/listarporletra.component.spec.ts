import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarporletraComponent } from './listarporletra.component';

describe('ListarporletraComponent', () => {
  let component: ListarporletraComponent;
  let fixture: ComponentFixture<ListarporletraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarporletraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarporletraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
