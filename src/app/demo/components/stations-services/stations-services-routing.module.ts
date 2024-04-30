import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddStationServiceComponent } from './add-station-service/add-station-service.component';
import { StationServiceListComponent } from './station-service-list/station-service-list.component';
import { BasicInformationComponent } from './add-station-service/basic-information/basic-information.component';
import { LocalisationInformationComponent } from './add-station-service/localisation-information/localisation-information.component';
import { ConfirmationInformationComponent } from './add-station-service/confirmation-information/confirmation-information.component';
import { ShowServiceStationComponent } from './show-service-station/show-service-station.component';


@NgModule({
    imports: [RouterModule.forChild([

        { path: 'service_servicelist', component: StationServiceListComponent},
        { path: 'showservice_station/:ssId', component: ShowServiceStationComponent},
        { path: 'addservice_station', component: AddStationServiceComponent,
          children: [
            { path: 'basic', component: BasicInformationComponent },
            { path: 'localisation', component: LocalisationInformationComponent },
            { path: 'confirmation', component: ConfirmationInformationComponent },
            { path: '', redirectTo: 'basic', pathMatch: 'full' },
          ]
        }
    ])],
    exports: [RouterModule]
})
export class StationsServicesRoutingModule { }
