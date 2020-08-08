import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscribable, Subscription } from 'rxjs';
import { LocationTarget, Weather } from '../_interfaces';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LocalWeatherService {
    private weatherAPI = `https://fcc-weather-api.glitch.me`;
    private weatherLocation: BehaviorSubject<Weather> = new BehaviorSubject(null);
    weatherLocation$: Observable<Weather> = this.weatherLocation.asObservable();

    constructor(private http: HttpClient) {}

    getPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (resp) => {
                    const cordinates = {
                        lon: parseInt(Number.parseFloat(`${resp.coords.longitude}`).toFixed(0), 10),
                        lat: parseInt(Number.parseFloat(`${resp.coords.latitude}`).toFixed(0), 10),
                    };
                    this.getGeoLocation(cordinates);
                    resolve(cordinates);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    }

    getGeoLocation(position): Subscription {
        if (position) {
            return this.http
                .get(`${this.weatherAPI}/api/current?lon=${position.lon}&lat=${position.lat}`)
                .pipe(
                    tap((weatherResponse: Weather) => {
                        this.weatherLocation.next(weatherResponse);
                    })
                )
                .subscribe();
        }
    }
}
