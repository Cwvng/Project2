import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./page/home-page/home-page.component";
import {RoomDetailComponent} from "./page/room-detail/room-detail.component";
import {ResultPageComponent} from "./page/result-page/result-page.component";
import {SignInComponent} from "./component/sign-in/sign-in.component";

const routes: Routes = [
  {path:"" ,component:HomePageComponent},
  {path:"room/:id", component:RoomDetailComponent},
  {path:"result", component:ResultPageComponent},
  {path:"signin", component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
