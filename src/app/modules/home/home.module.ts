import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent, ImageSlideComponent } from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ImageSlideComponent, HomePageComponent],
    imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
