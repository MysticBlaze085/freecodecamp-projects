import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather, WeatherDescription } from 'src/app/_interfaces';
import { LocalWeatherService } from '../../../../_services/local-weather.service';

import * as moment from 'moment';

@Component({
    selector: 'app-local-weather',
    templateUrl: './local-weather.component.html',
    styleUrls: ['./local-weather.component.scss'],
})
export class LocalWeatherComponent implements OnInit {
    weatherData$: Observable<Weather>;
    dayLightBackground: string;
    mainIcon: string;
    todaysDate;

    constructor(private localWeatherService: LocalWeatherService) {}

    ngOnInit(): void {
        this.todaysDate = moment().format('LLLL');
        this.weatherData$ = this.localWeatherService.weatherLocation$;
        this.localWeatherService.weatherLocation$.subscribe((res: Weather) => {
            console.log('res', res);
            if (res) {
                this.setDayLightBackground(res);
            }
        });
    }

    setDayLightBackground({ weather }) {
        const getAmOrPm = moment().format('a');
        this.dayLightBackground = getAmOrPm.includes('p') ? 'bg-primary' : '';
        weather.filter((res: WeatherDescription) => {
            const setLowerCase = res.description.toLowerCase();
            this.mainIcon = this.setMainIcon(setLowerCase);
        });
    }

    setMainIcon(description: string) {
        switch (description) {
            case 'clouds':
                return 'fas fa-cloud';
            case 'drizzle':
                return 'fas fa-cloud-rain';
            case 'rain':
                return 'fas fa-cloud-rain';
            case 'snow':
                return 'fas fa-snowflake';
            case 'thunderstorm':
                return 'fas fa-bolt';
            default:
                return 'fas fa-cloud-sun';
        }
    }
}
