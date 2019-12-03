import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login/login.service';
import {DeviceService} from '../../show-device/device.service';

@Component({
  selector: 'app-deviceDiscovery',
  templateUrl: './device-discovery.component.html',
  styleUrls: ['./device-discovery.component.css']
})
export class DeviceDiscoveryComponent implements OnInit {
  isLogin = false;
  form: any = {};
  isValid = false;
  isLoadingFailed = true;
  deviceIpsInfor: any = {};
  errorMessage = 'waiting...';

  constructor(
    private loginService: LoginService,
    private deviceService: DeviceService
  ) {
  }

  checkValid(): void {
    let rangeIp = '';
    let start: number;
    let end: number;
    let rangeBegin: number;
    let rangeEnd: number;

    this.isValid =
      /^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[-]([0-9]{1,3})$/.test(this.form.rangeIp);
    if (this.isValid) {
      rangeIp = this.form.rangeIp;
      console.log(rangeIp);
      start = rangeIp.lastIndexOf('.');
      end = rangeIp.indexOf('-');
      console.log(start);
      console.log(end);
      // tslint:disable-next-line:radix
      rangeBegin = parseInt(rangeIp.substring(start + 1, end));
      // tslint:disable-next-line:radix
      rangeEnd = parseInt(rangeIp.slice(end + 1));
      console.log(rangeBegin);
      console.log(rangeEnd);
      if (rangeBegin >= rangeEnd) {
        this.isValid = false;
      }
    }
    console.log(this.isValid);
  }

  reload() {
    this.deviceIpsInfor = null;
  }

  onSubmit() {
    this.reload();
    console.log(this.form);
    this.checkValid();
    if (this.isValid) {
      this.deviceService.discoverDevice(this.form.rangeIp).subscribe(
        data => {
          console.log(data);
          this.deviceIpsInfor = data;
          this.isLoadingFailed = false;
          console.log(this.deviceIpsInfor);
        },
        error => {
          console.log(this.errorMessage);
          this.errorMessage = error.error;
          console.log(this.errorMessage);
          this.isLoadingFailed = true;
        }
      );
    }
  }

  ngOnInit() {
    this.isLogin = this.loginService.isLogin();
  }

}
