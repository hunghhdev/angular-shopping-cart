import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title = 'angular-shopping-cart';
  numberItems: number = 4;

  constructor() {}

  ngOnInit(): void {}
}
