import {Component} from '@angular/core';
import {TodoService} from "../todo/todo.service";
import {ToDo} from "../todo/todo";

@Component({
    selector: 'app-todo-delete',
    templateUrl: './todo-delete.component.html',
    styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent {
    myToDoList: ToDo[] = [];
    id: number = 0;

    constructor(private todoService: TodoService) {

    }

    deleteToDo(id: number) {
        this.todoService.deleteToDo(id).subscribe(todo => {
            this.myToDoList = this.myToDoList.filter(t => t.id !== id);
        });
    }

}
