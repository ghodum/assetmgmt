import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRoutingModule } from './employees/employee-routing.module';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AssetRoutingModule } from './assets/asset-routing.module';
import { AssetListComponent } from './assets/asset-list/asset-list.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AssetListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AssetRoutingModule,
    EmployeeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
