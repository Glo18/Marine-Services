import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
   path: '',
   component: HomeComponent
  },
  {
   path: 'about',
   component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  { 
    path: '', redirectTo:"", pathMatch:"full"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
