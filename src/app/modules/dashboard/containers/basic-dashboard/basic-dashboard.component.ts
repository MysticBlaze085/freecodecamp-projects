import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { IMappedMedicalData, IMedicalData } from 'src/app/_interfaces';
import { MedicalDataService } from 'src/app/_services';
import { mapWidgetData } from './dashboard-config';

@Component({
    selector: 'app-basic-dashboard',
    templateUrl: './basic-dashboard.component.html',
    styleUrls: ['./basic-dashboard.component.scss'],
})
export class BasicDashboardComponent implements OnInit {
    $data: Observable<IMedicalData[]>;
    form: FormGroup;

    options: string[];
    regionData: IMedicalData[] | IMappedMedicalData;
    medicalData: IMedicalData[];

    constructor(private medicalDataService: MedicalDataService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.$data = this.medicalDataService.$medicalData.pipe(
            tap((medData: IMedicalData[]) => {
                this.options = medData.map((list: IMedicalData) => this.mapFilteredRegionData(list));
                this.medicalData = medData;
            })
        );
    }

    private mapFilteredRegionData({ region }): string {
        return region;
    }

    setFilteredByRegion(state: string): void {
        this.regionData = this.medicalData.filter((medData: IMedicalData) => medData.region === state);
        this.regionData.map((medData: IMedicalData) => (this.regionData = this.mapWidgetDataDashboard(medData)));
    }

    private mapWidgetDataDashboard(data: IMedicalData): IMappedMedicalData {
        return mapWidgetData(data);
    }
}
