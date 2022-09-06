import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule, TableScrollingViewportModule } from './shared';
import { StocksTableComponent, StocksViewportComponent } from './components';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TableScrollingViewportModule,
  ],
  declarations: [
    AppComponent,
    StocksTableComponent,
    StocksViewportComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
