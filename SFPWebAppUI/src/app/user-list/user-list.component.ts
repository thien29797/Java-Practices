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
  [x: string]: any;
  userOutputs: Observable<User[]>;
  isAuthenticate = false;
  info: any;
  config: any;
  totalRec = 50;
  page = 1;
  public data: any;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private route: Router,
    private token: TokenStorageService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 500
    };
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

  reloadData() {
    this.userOutputs = this.userService.getUsers();
  }

  editUser(user: User): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['/edit-user']);
  }

  deleteUser(id: number): void {
    this.userService.deleteUserById(id)
      .subscribe( data => {
        console.log(data);
        this.reloadData();
      },
        error => console.log(error));
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.checkAuthenticate();
    this.loadUserOutputs();
    this.data = [this.userOutputs];
    this.info = {
      id: this.token.getID(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info);
  }
}
