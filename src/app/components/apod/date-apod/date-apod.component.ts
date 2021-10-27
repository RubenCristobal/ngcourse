import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-apod',
  templateUrl: './date-apod.component.html',
  styleUrls: ['./date-apod.component.scss']
})
export class DateApodComponent implements OnInit {

  currentDate: any;
  @Output() onDateChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDate() {
    // get currentDate as string YYYY-MM-DD
    const dateString = this.currentDate.year + '-' + this.currentDate.month + '-' + this.currentDate.day;
    this.onDateChange.emit(dateString);
  }

}
