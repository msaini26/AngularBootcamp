import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import Home component
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  // redirects to home and makes sure that your path is complete
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
