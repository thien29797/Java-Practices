import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private baseUrl = 'http://localhost:8080/api/devices';
  constructor(private http: HttpClient) {
  }

  getDeviceIpConfig(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ipconfig`, httpOptions);
  }

  getDeviceIpInfor(): Observable<any> {
    return this.http.get(`${this.baseUrl}/information`, httpOptions);
  }

  getWritedDeviceIpConfig(ip: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${ip}/ipconfig`, httpOptions);
  }

  getWritedDeviceIpInfor(ip: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${ip}/information`, httpOptions);
  }

  // CHECK IP WITH RANGE_EX
  discoverDevice(rangeIp: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/discovery/${rangeIp}`, httpOptions);
  }

  getDeviceIpList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ips`, httpOptions);
  }
}
