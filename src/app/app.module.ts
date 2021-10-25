import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ChartsComponent } from './charts/charts.component';
import { LayoutSidenavLightComponent } from './layout-sidenav-light/layout-sidenav-light.component';
import { LayoutStaticComponent } from './layout-static/layout-static.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { TablesComponent } from './tables/tables.component';
import { Error401Component } from './error401/error401.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ChartsComponent,
    LayoutSidenavLightComponent,
    LayoutStaticComponent,
    LoginComponent,
    PasswordComponent,
    RegisterComponent,
    TablesComponent,
    Error401Component,
    Error404Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
