import { HomeComponent } from './home/home.component';
import { CepDetailsComponent } from './cep-details/cep-details.component';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //{path: 'cep-details', component: CepDetailsComponent},
  //{path: 'home', component: HomeComponent}
  { path: 'home', component: HomeComponent },
  { path: 'ceps/:numeroCep', component: CepDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule {}
