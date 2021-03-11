import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintComponent } from './print/print.component';
import { SelectShipComponent } from './select-ship/select-ship.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShipSearchResultComponent } from './ship-search-result/ship-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintComponent,
    SelectShipComponent,
    UserComponent,
    UserFormComponent,
    SelectSeatComponent,
    HeaderComponent,
    FooterComponent,
    ShipSearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
