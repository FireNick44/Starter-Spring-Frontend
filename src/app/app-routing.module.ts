import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ToDoListComponent} from "./views/to-do-list/to-do-list.component";
import {ToDoListUpdateComponent} from "./views/to-do-list-update/to-do-list-update.component";
import {ToDoListAddComponent} from "./views/to-do-list-add/to-do-list-add.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: "",
    title: "home"
  },
  {
    component: ToDoListComponent,
    path: "todo",
    title: "ToDos"
  },
  // {
  //   component: ToDoListUpdateComponent,
  //   path: "todo/edit",
  //   title: "Edit",
  // },
  {
    component: ToDoListUpdateComponent,
    path: "edit/list/:id",
    title: "Edit with Id",
  },
  {
    component: ToDoListAddComponent,
    path: "todo/add",
    title: "Create",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
