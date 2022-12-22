import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {AgainstComputerComponent} from "./against-computer/against-computer.component";

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'computer', component: AgainstComputerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
