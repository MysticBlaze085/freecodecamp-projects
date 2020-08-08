import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetLocationResolver } from 'src/app/_resolvers';
import { LocalWeatherComponent } from '.';

const routes: Routes = [
    {
        path: '',
        component: LocalWeatherComponent,
        resolve: [GetLocationResolver],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LocalWeatherRoutingModule {}
