import { Component, OnInit } from '@angular/core';
import { Book } from "../book"
import { BookRepository } from "../books.repository"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public selectedType: string = null;

  constructor(private bookRepository: BookRepository) {
  }

  get books(): Book[] {
    return this.bookRepository.getBooks(this.selectedType);
  }

  get types(): string[] {
    return this.bookRepository.getBookTypes();
  }

  changeType(type ?: string) {
    this.selectedType = type;
  }

  ngOnInit() {
  }

}