import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoListService } from '../../service/ToDoList/to-do-list.service'; // Replace with your service import
import { ToDoList } from '../../models/to-do-list.model';

@Component({
  selector: 'app-to-do-list-update',
  templateUrl: './to-do-list-update.component.html',
  styleUrls: ['./to-do-list-update.component.scss']
})
export class ToDoListUpdateComponent implements OnInit {
  toDoList: ToDoList | undefined;
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private toDoListService: ToDoListService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.fetchToDoList(this.id);
    });
  }

  fetchToDoList(id: number): void {
    this.toDoListService.getToDoListById(id).subscribe(toDoList => {
      this.toDoList = toDoList;
    });
  }
}
