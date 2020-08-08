import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDashboardComponent } from '.';

const routes: Routes = [{ path: '', component: BasicDashboardComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
