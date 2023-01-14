import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { InventoryManagementComponent } from './Inventory-management/Inventory-management.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', component: BodyComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'am', component: InventoryManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ BodyComponent, LoginComponent, InventoryManagementComponent]
