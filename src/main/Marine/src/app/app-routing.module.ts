import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { UserComponent } from './shared/user/user.component';

const routes: Routes = [
  {path:'', component:UserComponent},
  {path:'form', component:UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
