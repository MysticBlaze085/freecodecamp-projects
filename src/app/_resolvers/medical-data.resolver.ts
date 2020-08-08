import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedicalDataService } from '../_services';

@Injectable()
export class MedicalDataResolver implements Resolve<any> {
    constructor(private medicaldataService: MedicalDataService) {}

    resolve(): Subscription {
        return this.medicaldataService.getAllMedicalData().subscribe();
    }
}
