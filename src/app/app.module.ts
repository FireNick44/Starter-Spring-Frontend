import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ToDoListComponent } from './views/to-do-list/to-do-list.component';
import { ToDoListAddComponent } from './views/to-do-list-add/to-do-list-add.component';
import { ToDoListUpdateComponent } from './views/to-do-list-update/to-do-list-update.component';
import {FormsModule} from "@angular/forms";
import { RouterComponent } from './router/router.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoListComponent,
    ToDoListAddComponent,
    ToDoListUpdateComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
