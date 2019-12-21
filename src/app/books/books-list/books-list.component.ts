import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less']
})
export class BooksListComponent implements OnInit {

  bookTitle = 'salatiel';
  bookPublisher = 'salatiel';

  constructor(private service: BooksService) { }

  ngOnInit() {
    this.service.getBook(1)
      .subscribe(book => {
        this.bookTitle = book.title;
        this.bookPublisher = book.publisher;
      });
  }

}
