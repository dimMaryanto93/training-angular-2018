import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _route: Router,
    private _authService: AuthService) {
  }

  ngOnInit() {
    this.formGroup = this._form.group({
      'username': this._form.control(''),
      'password': this._form.control('')
    });
  }

  submitEvent($event) {
    console.log(this.formGroup.value);
    const username = this.formGroup.value.username;
    const password = this.formGroup.value.password;
    this._authService.authentication(username, password).subscribe(data => {
      // console.log(data);
      this._authService.setAuthenticate(data);
      this._route.navigate(['/home']);
    }, error => {
      console.error(error.message);
    });
  }
}
