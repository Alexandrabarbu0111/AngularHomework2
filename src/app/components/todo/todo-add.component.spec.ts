import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoAddComponent]
    });
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
