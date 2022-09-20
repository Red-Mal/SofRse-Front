import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRseideaComponent } from './list-rseidea.component';

describe('ListRseideaComponent', () => {
  let component: ListRseideaComponent;
  let fixture: ComponentFixture<ListRseideaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRseideaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRseideaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
