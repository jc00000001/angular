import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../model/book';

@Component({
  selector: 'app-siglebook',
  templateUrl: './siglebook.component.html',
  styleUrls: ['./siglebook.component.css']
})
export class SiglebookComponent implements OnInit {
  @Input()
  singleBookInfo : Book;

  constructor() { }

  ngOnInit() {
  }

}
