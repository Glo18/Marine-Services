import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintComponent } from './print/print.component';
import { SelectShipComponent } from './select-ship/select-ship.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShipSearchResultComponent } from './ship-search-result/ship-search-result.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
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
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
        PrintComponent,
        SelectShipComponent,
        UserComponent,
        UserFormComponent,
        SelectSeatComponent,
        HeaderComponent,
        FooterComponent,
        ShipSearchResultComponent
  ]
})
export class SharedModule { }
