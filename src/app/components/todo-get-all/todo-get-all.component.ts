import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo/todo.service";
import {ToDo} from "../todo/todo";

@Component({
    selector: 'app-todo-get-all',
    templateUrl: './todo-get-all.component.html',
    styleUrls: ['./todo-get-all.component.css']
})
export class TodoGetAllComponent {
    id: number = 0;
    myToDoList: ToDo[] = [];
    myTitle: string = "";
    myDescription: string = "";

    constructor(private todoService: TodoService) {

    }

    ngOnInit(): void {
    }

    getToDos() {

        this.todoService.getToDos().subscribe(todo => {
            this.myToDoList = todo;
        });
    }

}
