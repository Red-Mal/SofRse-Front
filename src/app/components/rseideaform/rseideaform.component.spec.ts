import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RseideaformComponent } from './rseideaform.component';

describe('RseideaformComponent', () => {
  let component: RseideaformComponent;
  let fixture: ComponentFixture<RseideaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RseideaformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RseideaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
