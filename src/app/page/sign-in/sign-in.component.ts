import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private _form: FormBuilder, private _route: Router) {
  }

  ngOnInit() {
    this.formGroup = this._form.group({
      'username': this._form.control(''),
      'password': this._form.control('')
    });
  }

  submitEvent($event) {
    console.log(this.formGroup.value);
    this._route.navigate(['/home']);
  }
}
