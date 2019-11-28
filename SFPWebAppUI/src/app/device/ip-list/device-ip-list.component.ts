import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../show-device/device.service';

@Component({
  selector: 'app-ips',
  templateUrl: './device-ip-list.component.html',
  styleUrls: ['./device-ip-list.component.css']
})
export class DeviceIpListComponent implements OnInit {
  ips: any = {};
  isLogin = false;

  constructor(
    private deviceService: DeviceService,
  ) {
  }

  ngOnInit() {
    this.ips = null;
    this.deviceService.getDeviceIpList().subscribe(
      data => {
        console.log(data);
        this.ips = data;
        console.log(this.ips);
      },
      error => {
        console.log(error);
      }
    );
  }

}
