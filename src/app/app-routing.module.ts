import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonComponent } from './person/person.component';
import { DashboardAngularetteComponent } from './dashboard-angularette/dashboard-angularette.component';


const routes: Routes = [{path:'', redirectTo:'personform', pathMatch:'full'},
  {path:'personform', component: PersonFormComponent},
  {path:'person', component: PersonComponent}, 
  {path:'dashboard', component: DashboardAngularetteComponent},
  {path: '**', redirectTo: 'personform'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
