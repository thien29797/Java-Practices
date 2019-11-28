import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../users/user';
import {UserService} from '../show-user/show-user.service';
import {LoginService} from '../login/login.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userOutputs: Observable<User[]>;
  isAuthenticate = false;
  info: any;
  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private route: Router,
    private token: TokenStorageService) {
  }

  checkAuthenticate(): void {
    if (this.loginService.isLogin() && (this.loginService.getAuthorities() === 'admin')) {
      this.isAuthenticate = true;
    }
  }

  loadUserOutputs(): void {
    if (this.isAuthenticate) {
      this.userOutputs = this.userService.getUsers();
      console.log(this.userOutputs);
    }
  }

  // editUser(user: User): void {
  //   localStorage.removeItem("editUserId");
  //   localStorage.setItem("editUserId", user.id.toString());
  //   this.router.navigate(['edit-user']);
  // }

  deleteUser(user: User): void {
    this.userService.deleteUserById(user.id)
      .subscribe( data => {
        // @ts-ignore
        this.userOutputs = this.userOutputs.filter(u => u !== user);
      });
  }

  ngOnInit() {
    this.checkAuthenticate();
    this.loadUserOutputs();
    this.info = {
      id: this.token.getID(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
}
