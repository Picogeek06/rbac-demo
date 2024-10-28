import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { DashboardModule } from "./views/dashboard/dashboard.module";
import { AppHeaderComponent } from "./views/app-header/app-header.component";
@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppHeaderComponent
  ],
  providers:[]
    
})
export class AppModule { }
