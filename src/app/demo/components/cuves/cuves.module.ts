import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuveRoutingModule } from './cuves-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview'
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AddTankComponent } from './add-tank/add-tank.component';
import { TankListComponent } from './tank-list/tank-list.component';




@NgModule({
  declarations: [AddTankComponent,TankListComponent],
  imports: [
    CommonModule,
    CuveRoutingModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    TagModule,
    TabViewModule,
    DropdownModule,
    InputNumberModule,
    ReactiveFormsModule,
    TableModule,
    MenuModule,
    TieredMenuModule,
    ConfirmPopupModule
  ]
})
export class CuvesModule { }
