import { Injectable } from '@angular/core';
import {Book, BOOKS} from '../model/book';

@Injectable()
export class BookService {

  constructor() { }

  getAllBooks(): Book[] {
    return BOOKS;
  }
}
