import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './modules/shared';
import { FlexLayoutModule } from '@angular/flex-layout/typings/module';

@NgModule({
    declarations: [AppComponent, NavigationComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, FlexLayoutModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
