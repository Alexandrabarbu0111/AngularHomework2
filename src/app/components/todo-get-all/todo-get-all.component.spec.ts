import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGetAllComponent } from './todo-get-all.component';

describe('TodoGetAllComponent', () => {
  let component: TodoGetAllComponent;
  let fixture: ComponentFixture<TodoGetAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoGetAllComponent]
    });
    fixture = TestBed.createComponent(TodoGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
