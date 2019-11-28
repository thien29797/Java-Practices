import {Component, OnInit} from '@angular/core';

import {LoginService} from '../../login/login.service';
import {DeviceService} from '../../show-device/device.service';

@Component({
  selector: 'app-deviceIpconfigSearching',
  templateUrl: './device-ipconfig-searching.component.html',
  styleUrls: ['./device-ipconfig-searching.component.css']
})
export class DeviceIpconfigSearchingComponent implements OnInit {
  form: any = {};
  isLogin = false;
  isValid = false;
  isSubmit = false;
  isLoadingFailed = false;
  deviceIpOutput: any = {};
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private deviceService: DeviceService
  ) {
  }

  onSubmit() {
    console.log(this.form);
    // this.isValid = /^10.220.20.2(0(4|5))|15|(42|8)|51$/.test(this.form.ip);
    this.isValid =
      /^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/.test(this.form.ip);
    if (this.isValid) {
      this.deviceService.getWritedDeviceIpConfig(this.form.ip).subscribe(
        data => {
          console.log(data);
          this.deviceIpOutput = data;
          console.log(this.deviceIpOutput);
          this.isLoadingFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error;
          this.isLoadingFailed = true;
        }
      );
    }
    this.isSubmit = true;
  }

  ngOnInit() {
    this.isLogin = this.loginService.isLogin();
  }
}
