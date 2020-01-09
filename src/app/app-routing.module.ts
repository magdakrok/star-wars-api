import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployessBrowserComponent } from './employess/employess-browser/employess-browser.component';

const routes: Routes = [
  {path: 'employess', component: EmployessBrowserComponent},
  {path: '', component: EmployessBrowserComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
