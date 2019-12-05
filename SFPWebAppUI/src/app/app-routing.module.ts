import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent} from './user-list/user-list.component';
import { DeviceDiscoveryComponent } from './device/discovery/device-discovery.component';
import { DeviceIpListComponent } from './device/ip-list/device-ip-list.component';
import { DeviceIpconfigListComponent } from './device/ipconfig-list/device-ipconfig-list.component';
import { DeviceIpconfigSearchingComponent } from './device/ipconfig-searching/device-ipconfig-searching.component';
import { DeviceInfoSearchingComponent } from './device/info-searching/device-info-searching.component';
import { SetupConfigureDevice } from './device/device-setup/device-setup.component';
import { UploadComponent } from './upload/upload.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent} from './admin/admin.component';
import {AddUserComponent} from './user-list/add-user/add-user.component';
import {EditUserComponent} from './user-list/edit-user/edit-user.component';
import {FindUserComponent} from './user-list/find-user/find-user.component';
import {StreamVideoComponent} from './stream/stream-video.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
  {
        path: 'user',
        component: UserComponent
    },
  {
        path: 'users',
        component: UserListComponent
    },
  {
        path: 'devices/discovery',
        component: DeviceDiscoveryComponent
  },
  {
        path: 'devices/devicelist',
        component: DeviceIpListComponent
  },
  {
        path: 'devices/ipconfig',
        component: DeviceIpconfigSearchingComponent
  },
  {
        path: 'devices/ipconfiglist',
        component: DeviceIpconfigListComponent
  },
  {
        path: 'devices/info',
        component: DeviceInfoSearchingComponent
  },
  {
        path: 'devices/setup',
        component: SetupConfigureDevice
  },
  {
        path: 'files/upload',
        component: UploadComponent
  },
  {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
  {     path: 'add-user',
        component: AddUserComponent
  },
  {
        path: 'edit-user',
        component: EditUserComponent
  },
  {
        path: 'find-user',
        component: FindUserComponent
  },
  {
        path: 'stream-video',
        component: StreamVideoComponent
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
