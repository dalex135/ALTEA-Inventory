import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { AddSchoolComponent } from './inventory-management/school/add-school/add-school.component';
import { AddDeviceComponent } from './inventory-management/device/add-device/add-device.component';
import { RemoveDeviceComponent } from './inventory-management/device/remove-device/remove-device.component';
import { UpdateDeviceComponent } from './inventory-management/device/update-device/update-device.component';
import { UpdateSchoolComponent } from './inventory-management/school/update-school/update-school.component';
import { RemoveSchoolComponent } from './inventory-management/school/remove-school/remove-school.component';
import { RemoveUserComponent } from './inventory-management/user/remove-user/remove-user.component';
import { AddUserComponent } from './inventory-management/user/add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { UpdateUserComponent } from './inventory-management/user/update-user/update-user.component';

const routes: Routes = [
  {
    path: '', component: BodyComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'inventory', component: InventoryManagementComponent
  },
  {
    path: 'add-device', component: AddDeviceComponent
  },
  {
    path: 'add-school', component: AddSchoolComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'update-device', component: UpdateDeviceComponent
  },
  {
    path: 'update-school', component: UpdateSchoolComponent
  },
  {
    path: 'update-user', component: UpdateUserComponent
  },
  {
    path: 'remove-device', component: RemoveDeviceComponent
  },
  {
    path: 'remove-school', component: RemoveSchoolComponent
  },
  {
    path: 'remove-user', component: RemoveUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ BodyComponent, LoginComponent, InventoryManagementComponent]
