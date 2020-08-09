import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalDataResolver } from './_resolvers';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
    {
        path: 'basic-dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'local-weather',
        loadChildren: () => import('./modules/local-weather/local-weather.module').then((m) => m.LocalWeatherModule),
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
