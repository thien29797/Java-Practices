import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login/login.service';

@Component ({
  selector: 'app-deviceSetup',
  templateUrl: './device-setup.component.html',
  styleUrls: ['./device-setup.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class SetupConfigureDevice implements OnInit {
  isLogin = false;

  constructor(
    private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLogin = this.loginService.isLogin();
  }
}
