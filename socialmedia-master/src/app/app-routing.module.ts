import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { createpostComponent } from './createpost/createpost.component';
import { dashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'users', component: dashboardComponent },
  { path: 'adduser', component: createpostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
