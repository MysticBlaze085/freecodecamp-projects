import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '.';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'basic-dashboard', loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
