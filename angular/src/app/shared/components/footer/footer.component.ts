import { Component, OnInit } from '@angular/core';
import { color } from 'src/environments/environment.prod';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public color = color

  constructor() { }

  ngOnInit(): void {
  }

}
