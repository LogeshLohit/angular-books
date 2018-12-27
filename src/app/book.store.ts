import { Injectable } from "@angular/core"
import { Book } from "./book"
import { Observable, from } from "rxjs"

@Injectable()

export class StaticDataSource {
  private books: Book[] = [
    new Book(123, "Thriller", "U are Under Arrest", 999),
    new Book(121, "Thriller", "hlo", 334),
    new Book(120, "Romance", "I am here for u", 666),
    new Book(223, "Drama", "Dramatic Change", 433)
  ];

  getBooks(): Observable<Book[]> {
    return from([this.books]);
  }
}
