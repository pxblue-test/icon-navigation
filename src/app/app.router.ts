import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertsComponent } from './alerts/alerts.component'
import { ProductsComponent } from './products/products.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'alert',
    component: AlertsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }