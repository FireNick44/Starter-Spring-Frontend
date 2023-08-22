import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoList } from '../../models/to-do-list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  private baseUrl = 'http://localhost:8080/todo/list';

  constructor(private http: HttpClient) { }

  getAllToDoLists(): Observable<ToDoList[]> {
    return this.http.get<ToDoList[]>(`${this.baseUrl}/all`);
  }

  getToDoListById(id: number): Observable<ToDoList> {
    return this.http.get<ToDoList>(`${this.baseUrl}/find/${id}`);
  }

  addTodoList(toDoList: ToDoList): Observable<ToDoList> {
    return this.http.post<ToDoList>(`${this.baseUrl}/add`, toDoList);
  }

  updateTodoList(toDoList: ToDoList): Observable<ToDoList> {
    return this.http.put<ToDoList>(`${this.baseUrl}/update`, toDoList);
  }

  deleteTodoList(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
