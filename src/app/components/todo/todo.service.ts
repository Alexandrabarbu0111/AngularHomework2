import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ToDo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = "http://localhost:4000/todo";


  constructor(private http : HttpClient) {
  }

    getToDos(): Observable<ToDo[]> {
      return this.http.get<ToDo[]>(this.apiUrl);
    }


    addToDo (title: string , description: string){

      return this.http.post<ToDo>(this.apiUrl, {title,completed:false,description} as ToDo);


    }

    deleteToDo (id: number): Observable<ToDo> {
      return this.http.delete<ToDo>(`${this.apiUrl}/${id}`);
  }



     getToDoById(id: number): Observable<ToDo> {
      return this.http.get<ToDo>(`${this.apiUrl}/${id}`);
     }

}
