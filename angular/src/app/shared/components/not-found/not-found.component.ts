import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user-management/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private authService: AuthService) {
    const value = this.authService.getToken() ? true : false
    this.authService.isUserLoggedin(value)
   }

  ngOnInit(): void {
  }

}
