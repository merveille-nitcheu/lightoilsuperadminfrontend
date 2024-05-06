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
import { MultiSelectModule } from "primeng/multiselect";
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SplitterModule } from 'primeng/splitter';
import { ShowServiceStationComponent } from './show-service-station/show-service-station.component';
import { OrderListModule } from 'primeng/orderlist';
import { ChipsModule } from 'primeng/chips';



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
        InputNumberModule,
        MultiSelectModule,
        FileUploadModule,
        ReactiveFormsModule,
        FormsModule,
        MenuModule,
        SplitButtonModule,
        MenubarModule,
        TieredMenuModule,
        ConfirmPopupModule,
        SplitterModule,
        OrderListModule,
        ChipsModule


    ],
    declarations: [AddStationServiceComponent,StationServiceListComponent,BasicInformationComponent,LocalisationInformationComponent,ConfirmationInformationComponent,ShowServiceStationComponent]

})
export class ServiceStationModule { }
