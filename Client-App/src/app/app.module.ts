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
import { MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { AgmCoreModule } from '@agm/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatRadioModule} from '@angular/material/radio';
import { GalleryModule} from  'ng-gallery';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LightboxModule } from  'ng-gallery/lightbox';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';



import { AddRecipientComponent } from './inventory-management/recipient/add-recipient/add-recipient.component';
import { RemoveRecipientComponent } from './inventory-management/recipient/remove-recipient/remove-recipient.component';
import { RemoveUserComponent } from './inventory-management/user/remove-user/remove-user.component';
import { UpdateRecipientComponent } from './inventory-management/recipient/update-recipient/update-recipient.component';
import { UpdateUserComponent } from './inventory-management/user/update-user/update-user.component';
import { InventoryTableComponent } from './inventory-management/inventory-table/inventory-table.component';
import { AddUserComponent } from './inventory-management/user/add-user/add-user.component';
import { AddPhotoComponent } from './inventory-management/gallery/add-photo/add-photo.component';
import { RemovePhotoComponent } from './inventory-management/gallery/remove-photo/remove-photo.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainHeaderComponent } from './landing-page/main-header/main-header.component';
import { HowToDonateComponent } from './landing-page/how-to-donate/how-to-donate.component';
import { RecipientsDonorsComponent } from './landing-page/recipients-donors/recipients-donors.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { TruncatePipe, WhatWeDoComponent } from "./landing-page/what-we-do/what-we-do.component";
import { AddReportComponent } from './inventory-management/report/add-report/add-report.component';
import { AddDonationComponent } from './inventory-management/donation/add-donation/add-donation.component';
import { RemoveDonationComponent } from './inventory-management/donation/remove-donation/remove-donation.component';
import { AddDeviceInfoComponent } from './inventory-management/device-info/add-device-info/add-device-info.component';
import { RemoveDeviceInfoComponent } from './inventory-management/device-info/remove-device-info/remove-device-info.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import { DonateComponent } from './landing-page/how-to-donate/donate/donate.component';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { ReportsComponent } from './landing-page/what-we-do/reports/reports.component';
import { DonorsComponent } from './landing-page/recipients-donors/donors/donors.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    InventoryManagementComponent,
    AddRecipientComponent,
    RemoveRecipientComponent,
    RemoveUserComponent,
    UpdateRecipientComponent,
    UpdateUserComponent,
    InventoryTableComponent,
    AddUserComponent,
    LandingPageComponent,
    MainHeaderComponent,
    HowToDonateComponent,
    RecipientsDonorsComponent,
    AboutUsComponent,
    FooterComponent,
    WhatWeDoComponent,
    AddPhotoComponent,
    AddReportComponent,
    RemovePhotoComponent,
    AddDonationComponent,
    RemoveDonationComponent,
    AddDeviceInfoComponent,
    RemoveDeviceInfoComponent,
    TruncatePipe,
    DonateComponent,
    NavBarComponent,
    ReportsComponent,
    DonorsComponent
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
      apiKey:'',
    }),
    YouTubePlayerModule,
    NgbModule,
    NgImageSliderModule,
    MatRadioModule,
    GalleryModule,
    LightboxModule,
    NgxBootstrapIconsModule.pick(allIcons),

  ],
  providers: [{
    provide: LIGHTBOX_CONFIG,
    useValue: {
      keyboardShortcuts: false
    }
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
