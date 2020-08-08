import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LocalWeatherService } from '../_services/local-weather.service';

@Injectable()
export class GetLocationResolver implements Resolve<any> {
    constructor(private localWeatherService: LocalWeatherService) {}

    resolve(): Promise<any> {
        return this.localWeatherService.getPosition();
    }
}
