import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from "../book.store"
import { BookRepository } from "../books.repository"
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [StaticDataSource, BookRepository]
})
export class BookModuleModule { }