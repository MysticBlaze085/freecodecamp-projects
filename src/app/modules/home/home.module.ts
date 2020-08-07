import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent, ImageSlideComponent } from '.';

@NgModule({
    declarations: [ImageSlideComponent, HomePageComponent],
    imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
