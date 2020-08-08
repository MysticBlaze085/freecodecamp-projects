import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BasicDashboardComponent, ChartComponent, ViewFormComponent } from '.';
import { MedicalDataResolver } from 'src/app/_resolvers';
import { SharedModule } from '../shared/shared.module';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
    declarations: [BasicDashboardComponent, ChartComponent, ViewFormComponent],
    imports: [CommonModule, DashboardRoutingModule, SharedModule, FusionChartsModule],
    providers: [MedicalDataResolver],
})
export class DashboardModule {}
