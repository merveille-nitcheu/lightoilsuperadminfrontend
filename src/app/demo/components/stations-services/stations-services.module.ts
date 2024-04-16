import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { StationsServicesRoutingModule } from './stations-services-routing.module';
import { AddStationServiceComponent } from './add-station-service/add-station-service.component';
import { StationServiceListComponent } from './station-service-list/station-service-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { BasicInformationComponent } from './add-station-service/basic-information/basic-information.component';
import { LocalisationInformationComponent } from './add-station-service/localisation-information/localisation-information.component';
import { ConfirmationInformationComponent } from './add-station-service/confirmation-information/confirmation-information.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
    imports: [
        CommonModule,
        StationsServicesRoutingModule,
        StepsModule,
        FieldsetModule,
        CardModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        DataViewModule,
        TagModule,
        DropdownModule,
        InputTextareaModule,
        InputMaskModule,
        InputNumberModule

    ],
    declarations: [AddStationServiceComponent,StationServiceListComponent,BasicInformationComponent,LocalisationInformationComponent,ConfirmationInformationComponent]

})
export class ServiceStationModule { }
