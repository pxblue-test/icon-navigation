import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DemoNavComponent } from "./demo-nav/demo-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { FormsModule} from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";

import { AppRoutingModule } from './app.router';
import { AlertsComponent } from './alerts/alerts.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [AppComponent, DemoNavComponent, AlertsComponent, ProductsComponent, SettingsComponent],
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
