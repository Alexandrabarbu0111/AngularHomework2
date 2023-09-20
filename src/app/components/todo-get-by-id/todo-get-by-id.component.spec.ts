import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGetByIdComponent } from './todo-get-by-id.component';

describe('TodoByIdComponent', () => {
  let component: TodoGetByIdComponent;
  let fixture: ComponentFixture<TodoGetByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoGetByIdComponent]
    });
    fixture = TestBed.createComponent(TodoGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
