import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() onKeyClick = new EventEmitter<number | string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: number | string) {
    this.onKeyClick.emit(value);
  }

}
