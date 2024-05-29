import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'compagnies', loadChildren: () => import('./demo/components/compagnies/compagnies.module').then(m => m.CompagniesModule) },
                    { path: 'service_station', loadChildren: () => import('./demo/components/stations-services/stations-services.module').then(m => m.ServiceStationModule) },
                    { path: 'config', loadChildren: () => import('./demo/components/config/config.module').then(m => m.ConfigModule) },
                    { path: 'cuves', loadChildren: () => import('./demo/components/cuves/cuves.module').then(m => m.CuvesModule) },
                    { path: 'user', loadChildren: () => import('./demo/components/user/user.module').then(m => m.UserModule) },
                ]

            },

        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
