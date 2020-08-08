import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalWeatherRoutingModule } from './local-weather-routing.module';
import { LocalWeatherComponent } from './containers/local-weather/local-weather.component';


@NgModule({
  declarations: [LocalWeatherComponent],
  imports: [
    CommonModule,
    LocalWeatherRoutingModule
  ]
})
export class LocalWeatherModule { }
