import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bookfilter',
  templateUrl: './bookfilter.component.html',
  styleUrls: ['./bookfilter.component.css']
})
export class BookfilterComponent implements OnInit {

  @Output()
   bookfilterEvent = new EventEmitter<string>();

  @Input()
  filterName: string;

  constructor() { }

  ngOnInit() {
  }

  sendFilterName(value: string){
    this.bookfilterEvent.emit(value);
  }
}
