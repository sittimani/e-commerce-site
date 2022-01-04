import { Component, OnInit } from '@angular/core';
import { color } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public color = color

  constructor() { }

  ngOnInit(): void {
  }

}
