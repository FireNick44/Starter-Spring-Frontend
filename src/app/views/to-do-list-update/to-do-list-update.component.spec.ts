import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListUpdateComponent } from './to-do-list-update.component';

describe('ToDoListUpdateComponent', () => {
  let component: ToDoListUpdateComponent;
  let fixture: ComponentFixture<ToDoListUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListUpdateComponent]
    });
    fixture = TestBed.createComponent(ToDoListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
