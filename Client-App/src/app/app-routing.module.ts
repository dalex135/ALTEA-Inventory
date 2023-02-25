import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { AddRecipientComponent } from './inventory-management/recipient/add-recipient/add-recipient.component';
import { UpdateRecipientComponent } from './inventory-management/recipient/update-recipient/update-recipient.component';
import { RemoveRecipientComponent } from './inventory-management/recipient/remove-recipient/remove-recipient.component';
import { RemoveUserComponent } from './inventory-management/user/remove-user/remove-user.component';
import { AddUserComponent } from './inventory-management/user/add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './inventory-management/user/update-user/update-user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddPhotoComponent } from './inventory-management/gallery/add-photo/add-photo.component';
import { AddReportComponent } from './inventory-management/report/add-report/add-report.component';
import { RemovePhotoComponent } from './inventory-management/gallery/remove-photo/remove-photo.component';
import { AddDonationComponent } from './inventory-management/donation/add-donation/add-donation.component';
import { RemoveDonationComponent } from './inventory-management/donation/remove-donation/remove-donation.component';
import { AddDeviceInfoComponent } from './inventory-management/device-info/add-device-info/add-device-info.component';
import { RemoveDeviceInfoComponent } from './inventory-management/device-info/remove-device-info/remove-device-info.component';
import { ReportComponent } from './landing-page/what-we-do/report/report.component';
import { DonateComponent } from './landing-page/how-to-donate/donate/donate.component';
import { ReportsComponent } from './landing-page/what-we-do/reports/reports.component';
import { DonorsComponent } from './landing-page/recipients-donors/donors/donors.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'inventory', component: InventoryManagementComponent
  },

  {
    path: 'add-recipient', component: AddRecipientComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },

  {
    path: 'update-recipient', component: UpdateRecipientComponent
  },
  {
    path: 'update-user', component: UpdateUserComponent
  },
  {
    path: 'remove-recipient', component: RemoveRecipientComponent
  },
  {
    path: 'remove-user', component: RemoveUserComponent
  },
  {
    path: 'add-photo', component: AddPhotoComponent
  },
  {
    path: 'remove-photo', component: RemovePhotoComponent
  },
  {
    path: 'add-donation', component: AddDonationComponent
  },
  {
    path: 'remove-donation', component: RemoveDonationComponent
  },
  {
    path: 'add-report', component: AddReportComponent
  },
  {
    path: 'remove-report', component: RemovePhotoComponent
  },
  {
    path: 'add-device-info', component: AddDeviceInfoComponent
  },
  {
    path: 'remove-device-info', component: RemoveDeviceInfoComponent
  },
  {
    path: 'report', component: ReportComponent
  },
  {
    path: 'reports', component: ReportsComponent
  },
  {
    path: 'donate', component: DonateComponent
  },
  {
    path: 'donors', component: DonorsComponent
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [  LoginComponent, InventoryManagementComponent]
