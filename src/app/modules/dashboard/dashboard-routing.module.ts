import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalDataResolver } from 'src/app/_resolvers';
import { BasicDashboardComponent } from '.';

const routes: Routes = [{ path: '', component: BasicDashboardComponent, resolve: [MedicalDataResolver] }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
