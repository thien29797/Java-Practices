import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { DeviceDiscoveryComponent } from './device/discovery/device-discovery.component';
import { DeviceIpListComponent } from './device/ip-list/device-ip-list.component';
import { DeviceIpconfigListComponent } from './device/ipconfig-list/device-ipconfig-list.component';
import { DeviceIpconfigSearchingComponent } from './device/ipconfig-searching/device-ipconfig-searching.component';
import { DeviceInfoSearchingComponent } from './device/info-searching/device-info-searching.component';
import { DetailsUploadFileComponent } from './file-upload/details-upload-file/details-upload-file.component';
import { CreateUploadFileComponent } from './file-upload/create-upload-file/create-upload-file.component';
import { ListUploadFileComponent } from './file-upload/list-upload-file/list-upload-file.component';
import { SetupConfigureDevice } from './device/device-setup/device-setup.component';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';
import { UserListComponent } from './user-list/user-list.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UserListComponent,
    DeviceDiscoveryComponent,
    DeviceIpListComponent,
    DeviceIpconfigListComponent,
    DeviceIpconfigSearchingComponent,
    DeviceInfoSearchingComponent,
    SetupConfigureDevice,
    DetailsUploadFileComponent,
    CreateUploadFileComponent,
    ListUploadFileComponent,
    UploadComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
