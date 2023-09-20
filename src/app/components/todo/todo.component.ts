import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import {ToDo} from "./todo";

@Component({
    selector: 'app-todo',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
    id: number = 0;
    myToDoList: ToDo[] = [];
    myTitle: string = "";
    myDescription: string = "";

    constructor(private todoService: TodoService) {

    }

    addToDo() {
        this.todoService.addToDo(this.myTitle, this.myDescription).subscribe(todo => {
            this.myToDoList.push(todo);
        });
    }


}
