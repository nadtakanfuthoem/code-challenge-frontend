import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

import { DisplayComponent } from './display/display.component';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		Ng2SearchPipeModule,
		FormsModule,
	],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
