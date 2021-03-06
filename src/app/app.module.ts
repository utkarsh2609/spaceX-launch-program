import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FiltersComponent } from './filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { ChipButtonComponent } from './chip-button/chip-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchCardComponent,
    MainSectionComponent,
    FiltersComponent,
    ChipButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
