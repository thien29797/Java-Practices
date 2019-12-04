import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../show-user/show-user.service';
import {AuthService} from '../../auth/auth.service';
import {AccountInfoUpdate} from '../../models/account-info-update';
import {User} from '../../users/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {

  info: any = {};
  form: any = {};
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  userOutputs: Observable<User[]>;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.userService.getUser(this.form.id).subscribe(
      data => {
        this.info = data;
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
