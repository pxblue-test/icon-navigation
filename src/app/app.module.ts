import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from './app.component';
import {ComingSoonComponent} from './comingsoon/comingsoon.component';

import { AppRoutingModule } from './app.router';
import {NavigationService} from './shared/navigation.service';

@NgModule({
  declarations: [AppComponent, ComingSoonComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
