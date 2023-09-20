import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {TodoGetByIdComponent} from "./components/todo-get-by-id/todo-get-by-id.component";
import {TodoGetAllComponent} from "./components/todo-get-all/todo-get-all.component";
import {TodoDeleteComponent} from "./components/todo-delete/todo-delete.component";
import {TodoAddComponent} from "./components/todo/todo.component";

const routes: Routes = [{
    path: 'todo/:id',
    component: TodoGetByIdComponent
}, {
    path: 'all',
    component: TodoGetAllComponent
},
    {
        path: 'delete',
        component: TodoDeleteComponent
    },
    {
        path: 'add',
        component: TodoAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
