import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  active: string;
  position: string;

  constructor() {
  }

  ngOnInit() {
  }

  pointerPosition(value, length) {
    this.active = value;
    this.position = length.x + 'px';
    console.log(length);
  }

  navBar() {

  }

}
