import { StaticDataSource } from "./book.store"
import { Book } from "./book"
import { Injectable } from "@angular/core"

@Injectable()
export class BookRepository {
  private books: Book[] = [];
  private types: string[] = [];
  constructor(private dataSource: StaticDataSource) {
    this.dataSource.getBooks().subscribe(
      data => {
        this.books = data;
        this.types = data.map(b => b.booktype)
          .filter((c, index, array) => array.indexOf(c) == index).sort();
      }

    )
  }

  getBooks(type: string = null): Book[] {
    return this.books.filter(book => book.booktype == type || type == null);
  }
  getBookTypes(): string[] {
    return this.types;
  }
}



