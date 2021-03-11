import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { SelectShipComponent } from './user/select-ship/select-ship.component';
import { SelectSeatComponent } from './user/select-seat/select-seat.component';
import { ShipSearchResultComponent } from './user/ship-search-result/ship-search-result.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectShipComponent } from './select-ship/select-ship.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectShipComponent,
    SelectSeatComponent,
    UserFormComponent,
    UserComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
