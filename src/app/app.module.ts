import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardModule } from "./views/dashboard/dashboard.module";
import { AppHeaderComponent } from "./views/app-header/app-header.component";
import { LoginComponent } from "./views/login/login.component";
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppHeaderComponent,
    LoginComponent,
  ],
  providers:[]
    
})
export class AppModule { }
