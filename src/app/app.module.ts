import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
