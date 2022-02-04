import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/user-management/services/auth.service';
import { color } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public color = color
  isUserLoggedIn = false
  userName = "manikandan"

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.authService.isLoggedin$.subscribe(isloggedIn => {
      this.isUserLoggedIn = isloggedIn
    })
   }

  ngOnInit(): void {
  }

  updateProfile() {}

  logout() {
    this.authService.logout()
    this.toastr.success("Logout Successfully!!!")
    this.router.navigate(['/login'])
  }

}
