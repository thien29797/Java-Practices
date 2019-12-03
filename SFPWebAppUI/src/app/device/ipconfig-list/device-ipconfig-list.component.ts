import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login/login.service';
import {DeviceService} from '../../show-device/device.service';

@Component({
  selector: 'app-deviceIpconfigList',
  templateUrl: './device-ipconfig-list.component.html',
  styleUrls: ['./device-ipconfig-list.component.css']
})
export class DeviceIpconfigListComponent implements OnInit {
  deviceIpConfigOutput: any;
  isLoadingFailed = false;
  isLogin = false;
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private deviceService: DeviceService
  ) {
  }

  reload() {
    this.deviceIpConfigOutput = null;
  }

  loadDeviceIpConfigOutput(): void {
    this.reload();
    if (this.isLogin) {
      this.deviceService.getDeviceIpConfig().subscribe(
        data => {
          console.log(data);
          this.deviceIpConfigOutput = data;
          this.isLoadingFailed = false;
          console.log(this.deviceIpConfigOutput);
        },
        error => {
          this.errorMessage = error.error;
          this.isLoadingFailed = true;
          console.log(this.errorMessage);
        }
      );
    }
  }

  ngOnInit() {
    this.isLogin = this.loginService.isLogin();
    this.loadDeviceIpConfigOutput();
  }
}
