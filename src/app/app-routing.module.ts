import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bankv1Component } from './bankv1/bankv1.component';
import { Bankv2Component } from './bankv2/bankv2.component';
//Define routes for the components
const routes: Routes = [{path: 'bankv1', component: Bankv1Component},
{path: 'bankv2', component: Bankv2Component},
{path: '', redirectTo: '/bankv1', pathMatch: 'full'}]; // redirect to BankV1Component

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
