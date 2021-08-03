import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() getData: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleClickData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  handleData(){
    this.getData.emit("Hello Data");
  }
  handleClick(){
    this.getData.emit("Hello Click Data");
  }
}
