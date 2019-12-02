import { Component, OnInit } from '@angular/core';
import {UserService} from '../../show-user/show-user.service';
import {Router} from '@angular/router';
import {User} from '../../users/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AccountInfo} from '../../models/account-info';
import {AuthService} from '../../auth/auth.service';
import {AccountInfoUpdate} from '../../models/account-info-update';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup;
  form: any = {};
  accountInfoUpdate: AccountInfoUpdate;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  user: User = new User();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) { }

  // ngOnInit() {
  //   const userId = localStorage.getItem('editUserId');
  //   if (!userId) {
  //     alert('Invalid action.')
  //     this.router.navigate(['users']);
  //     return;
  //   }
  //   this.editForm = this.formBuilder.group({
  //     id: [],
  //     email: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required]
  //   });
  //   this.userService.getUser(+userId)
  //     .subscribe( data => {
  //       this.editForm.setValue(data);
  //     });
  // }
  //
  // onSubmit() {
  //   this.userService.updateUser(this.editForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['users']);
  //       },
  //       error => {
  //         alert(error);
  //       });
  // }
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.form);

    this.accountInfoUpdate = new AccountInfoUpdate(
      this.form.id,
      this.form.name,
      this.form.username,
      this.form.email,
      [this.form.role],
      this.form.password);

    this.userService.updateUser(this.accountInfoUpdate).subscribe(
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
