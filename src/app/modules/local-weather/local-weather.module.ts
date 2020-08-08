import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalWeatherRoutingModule } from './local-weather-routing.module';
import { LocalWeatherComponent } from './containers/local-weather/local-weather.component';
import { SharedModule } from '../shared/shared.module';
import { LocalWeatherService } from 'src/app/_services';
import { GetLocationResolver } from 'src/app/_resolvers';

@NgModule({
    declarations: [LocalWeatherComponent],
    imports: [CommonModule, LocalWeatherRoutingModule, SharedModule],
    providers: [LocalWeatherService, GetLocationResolver],
})
export class LocalWeatherModule {}
