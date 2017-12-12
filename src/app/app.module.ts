import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LuotkhachComponent } from './luotkhach/luotkhach.component';
import { HeatmapsComponent } from './heatmaps/heatmaps.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKRCozWnVoFb-x88T9RJzQJuivUhPfqCo'
    })
  ],
  providers: [],
  declarations: [ 
    AppComponent,
    LuotkhachComponent,
    HeatmapsComponent,
    HeaderComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
