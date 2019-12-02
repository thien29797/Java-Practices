import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../show-user/show-user.service';
import {Router} from '@angular/router';
import {User} from '../../users/user';
import {AuthService} from '../../auth/auth.service';
import {AccountInfo} from '../../models/account-info';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) { }

  form: any = {};
  accountInfo: AccountInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  user: User = new User();

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.form);

    this.accountInfo = new AccountInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      [this.form.role],
      this.form.password);

    this.authService.signUp(this.accountInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        // this.notifier.show(new MyNotification(Alert.SUCCESS, 'Create Account Successfully!'));
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
        // this.notifier.show(new MyNotification(Alert.SUCCESS, 'Create Account failed!'));
      }
    );
  }

  reload() {
    window.location.reload();
  }
}
