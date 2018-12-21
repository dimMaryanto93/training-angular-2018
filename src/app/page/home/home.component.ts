import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  identity: any;

  constructor(private _route: Router, private _authService: AuthService) {
  }

  ngOnInit() {
    this._authService.check_token().subscribe(data => {
      this.identity = data;
    }, error => {
      console.error(error);
    });
  }

  logout() {
    this._authService.removeToken();
    this._route.navigate(['/login']);
  }
}
