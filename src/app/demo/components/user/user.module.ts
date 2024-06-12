import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { UserComponent } from './user/user.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from "primeng/multiselect";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../loading/loading.module';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FieldsetModule,
    CardModule,
    ConfirmPopupModule,
    TableModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
  ]
})
export class UserModule { }
