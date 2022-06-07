import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddHairdresserComponent } from './hairdresser/add-hairdresser/add-hairdresser.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: "register-client", component: NavBarComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path:"home/register-hairdresser", component:AddHairdresserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
