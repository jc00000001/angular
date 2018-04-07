import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Book, BOOKS} from '../model/book';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrls: ['./bookinfo.component.css']
})
export class BookinfoComponent implements OnInit {
  _books: Book[];
  showBookinfo: boolean = true;
  singleBookInfo: Book;

  //Filter
  bookISBN: string = "";
  bookName: string = "";

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this._books = this.bookService.getAllBooks();
  }

  toggleBookInfo() {
    this.showBookinfo = !this.showBookinfo;
  }

  showSingleBookInfo(singleBookInfo: Book){
    this.singleBookInfo = singleBookInfo;
  }

  get books(){
    if((this.bookISBN != null && this.bookISBN.trim() !== "") || (this.bookName != null && this.bookName.trim() !== "")){
      return this._books.filter(book => ((this.bookName.trim() === "") ? false : book.bookName.includes(this.bookName)) ||
        ((this.bookISBN.trim() === "") ? false : book.bookISBN.includes(this.bookISBN))).filter(x => !!x);
    }else {
      return this._books;
    }
  }

  setbookISBNFilter(bookISBN: string) {
    this.bookISBN=bookISBN;
  }

  setBookNameFilter(bookName: string) {
    this.bookName = bookName;
  }
}
