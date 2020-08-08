import { Component, Input } from '@angular/core';
import { IMappedMedicalData } from 'src/app/_interfaces';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styles: [],
})
export class ChartComponent {
    @Input() chartData: IMappedMedicalData;
}
