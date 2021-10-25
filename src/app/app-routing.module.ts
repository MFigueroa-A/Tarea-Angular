import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { table } from 'console';
import { ChartsComponent } from './charts/charts.component';
import { Error401Component } from './error401/error401.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { IndexComponent } from './index/index.component';
import { LayoutSidenavLightComponent } from './layout-sidenav-light/layout-sidenav-light.component';
import { LayoutStaticComponent } from './layout-static/layout-static.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'charts',component:ChartsComponent},
  {path:'layout-sidenav-light',component:LayoutSidenavLightComponent},
  {path:'layout-static',component:LayoutStaticComponent},
  {path:'tables',component:TablesComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'password',component:PasswordComponent},
  {path:'error401',component:Error401Component},
  {path:'error404',component:Error404Component},
  {path:'error500',component:Error500Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
