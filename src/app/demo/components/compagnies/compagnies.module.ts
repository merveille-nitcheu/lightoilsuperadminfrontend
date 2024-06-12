import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompagniesRoutingModule } from './compagnies-routing.module';
import { StepsModule } from 'primeng/steps';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { AddCompagnieComponent } from './add-compagnie/add-compagnie.component';
import { CompagniesListComponent } from './compagnies-list/compagnies-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../loading/loading.module';




@NgModule({
    imports: [
        CommonModule,
        CompagniesRoutingModule,
        StepsModule,
        FieldsetModule,
        CardModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        FileUploadModule,
        CalendarModule,
        InputNumberModule,
        InputMaskModule,
        ConfirmPopupModule,
        ReactiveFormsModule,
        LoadingModule

    ],

    declarations: [AddCompagnieComponent,CompagniesListComponent]

})
export class CompagniesModule { }
