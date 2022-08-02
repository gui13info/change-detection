import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { OnpushComponent } from './components/onpush/onpush.component';
import { OnpushChieldComponent } from './components/onpush/onpush-chield/onpush-chield.component';
import { OnpushTwoComponent } from './components/onpush-two/onpush-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OnpushComponent,
    OnpushChieldComponent,
    OnpushTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
