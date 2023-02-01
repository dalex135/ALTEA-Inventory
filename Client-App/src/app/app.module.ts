import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule} from '@angular/material/select';
import { MatStepperModule} from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';

import { AddDeviceComponent } from './inventory-management/device/add-device/add-device.component';
import { AddSchoolComponent } from './inventory-management/school/add-school/add-school.component';
import { RemoveDeviceComponent } from './inventory-management/device/remove-device/remove-device.component';
import { RemoveSchoolComponent } from './inventory-management/school/remove-school/remove-school.component';
import { RemoveUserComponent } from './inventory-management/user/remove-user/remove-user.component';
import { UpdateDeviceComponent } from './inventory-management/device/update-device/update-device.component';
import { UpdateSchoolComponent } from './inventory-management/school/update-school/update-school.component';
import { UpdateUserComponent } from './inventory-management/user/update-user/update-user.component';
import { InventoryTableComponent } from './inventory-management/inventory-table/inventory-table.component';
import { AddUserComponent } from './inventory-management/user/add-user/add-user.component';
import { AgmCoreModule } from '@agm/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    LoginComponent,
    routingComponents,
    InventoryManagementComponent,
    AddDeviceComponent,
    AddSchoolComponent,
    AddSchoolComponent,
    RemoveDeviceComponent,
    RemoveSchoolComponent,
    RemoveUserComponent,
    UpdateDeviceComponent,
    UpdateSchoolComponent,
    UpdateUserComponent,
    InventoryTableComponent,
    AddUserComponent,


   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey:,
    }),
    IvyCarouselModule,
    YouTubePlayerModule,
    NgbCarouselModule,
    MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
