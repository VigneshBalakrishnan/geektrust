import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FalconeComponent } from './falcone/falcone.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FalconeService } from './falcone/falcone-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FalconeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FalconeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
