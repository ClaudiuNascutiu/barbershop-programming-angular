import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { ContactComponent } from './contact/contact.component';
import { AddHairdresserComponent } from './hairdresser/add-hairdresser/add-hairdresser.component';
import { HairdresserListComponent } from './hairdresser/hairdresser-list/hairdresser-list.component';
import { HomeComponent } from './home/home component/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {
    path: "register-user", component: NavBarComponent
  },
  {
    path: "", component: HomeComponent
  },
  {
    path:"register-hairdresser", component:AddHairdresserComponent
  },
  {
    path:"hairdressers", component:HairdresserListComponent
  },
  {
    path:"allAppointment/:id", component:AppointmentListComponent
  },
  {
    path:"add-appointment/:id", component:AddAppointmentComponent
  },
  {
    path:"user-profile", component: UserProfileComponent
  },

  {
    path: "user-profile", component:UserProfileComponent
  },
  
  {
    path: "contact", component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
