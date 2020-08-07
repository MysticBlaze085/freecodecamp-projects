import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent, ImageSlideComponent } from '.';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from '../shared';
import { WelcomeTextComponent } from './components/welcome-text/welcome-text.component';

@NgModule({
    declarations: [ImageSlideComponent, HomePageComponent, NavigationComponent, WelcomeTextComponent],
    imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
