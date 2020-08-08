import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalDataResolver } from './_resolvers';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
    {
        path: 'basic-dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
