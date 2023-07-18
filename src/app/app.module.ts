import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { CityComponent } from './component/city/city.component';
import { TypeComponent } from './component/type/type.component';
import { FooterComponent } from './component/footer/footer.component';
import { RoomListComponent } from './component/room-list/room-list.component';
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './page/home-page/home-page.component';
import { RoomDetailComponent } from './page/room-detail/room-detail.component';
// Import the registerLocaleData function to set the Vietnamese locale.
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { CommonModule } from '@angular/common';
import { ResultPageComponent } from './page/result-page/result-page.component';
import { FilterComponent } from './component/filter/filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './component/sign-in/sign-in.component';
import {ReactiveFormsModule} from "@angular/forms";


// Register the Vietnamese locale.
registerLocaleData(localeVi);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    CityComponent,
    TypeComponent,
    FooterComponent,
    RoomListComponent,
    HomePageComponent,
    RoomDetailComponent,
    ResultPageComponent,
    FilterComponent,
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' } // Use 'vi' for Vietnamese locale
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
