import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TodoAddComponent} from './components/todo/todo.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TodoService} from "./components/todo/todo.service";
import { TodoGetByIdComponent } from './components/todo-get-by-id/todo-get-by-id.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { TodoGetAllComponent } from './components/todo-get-all/todo-get-all.component';
import { TodoDeleteComponent } from './components/todo-delete/todo-delete.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


/*...*/



@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoDeleteComponent,
    TodoGetAllComponent,
    TodoGetByIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink,


  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
