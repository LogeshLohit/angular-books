import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BooksComponent } from './books/books.component';
import { BookModuleModule } from "./book-module/book-module.module"

@NgModule({
  imports:      [ BrowserModule, FormsModule , BookModuleModule ],
  declarations: [ AppComponent, HelloComponent, BooksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
