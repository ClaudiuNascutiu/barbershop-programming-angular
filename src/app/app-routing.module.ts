import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';

const routes: Routes = [
  {path: "register-client", component: AddClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
