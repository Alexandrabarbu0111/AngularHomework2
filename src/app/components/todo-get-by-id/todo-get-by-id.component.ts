import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../todo/todo.service";
import {ToDo} from "../todo/todo";
import {Observable} from "rxjs";


@Component({
    selector: 'app-todo-get-by-id',
    templateUrl: './todo-get-by-id.component.html',
    styleUrls: ['./todo-get-by-id.component.css']
})
export class TodoGetByIdComponent {
    id: number = 0;
    mytodo: ToDo | undefined;


    constructor(private route: ActivatedRoute, private todoService: TodoService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.todoService.getToDoById(this.id).subscribe(todo => {
                this.mytodo = todo;
            });
        });
    }
}


