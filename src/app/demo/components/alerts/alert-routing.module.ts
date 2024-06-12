import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';




@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: AlertsComponent }])],
    exports: [RouterModule],

})
export class AlertRoutingModule { }
