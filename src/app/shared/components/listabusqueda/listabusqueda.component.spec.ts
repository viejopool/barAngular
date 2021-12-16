import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabusquedaComponent } from './listabusqueda.component';

describe('ListabusquedaComponent', () => {
  let component: ListabusquedaComponent;
  let fixture: ComponentFixture<ListabusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListabusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListabusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
