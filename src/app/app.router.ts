import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './comingsoon/comingsoon.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'alert',
    component: ComingSoonComponent,
    data:{title: 'Alerts'}
  },
  {
    path: 'schedule',
    component: ComingSoonComponent,
    data:{title: 'Schedule'}
  },
  {
    path: 'products',
    component: ComingSoonComponent,
    data:{title: 'Products'}
  },
  {
    path: 'events',
    component: ComingSoonComponent,
    data:{title: 'Event Log'}
  },
  {
    path: 'settings',
    component: ComingSoonComponent,
    data:{title: 'Settings'}
  },
  {
    path: 'profile',
    component: ComingSoonComponent,
    data:{title: 'User Profile'}
  },
  {
    path: 'license',
    component: ComingSoonComponent,
    data:{title: 'License Agreement'}
  },
  {
    path: 'guide',
    component: ComingSoonComponent,
    data:{title: 'User Guide'}
  },
  {
    path: 'logout',
    component: ComingSoonComponent,
    data:{title: 'Logout'}
  }
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