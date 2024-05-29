import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuveRoutingModule } from './cuves-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview'
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AddTankComponent } from './add-tank/add-tank.component';
import { TankListComponent } from './tank-list/tank-list.component';
import { ChipsModule } from 'primeng/chips';
import { ShowTankComponent } from './show-tank/show-tank.component';
import { TabViewModule } from 'primeng/tabview';
import { SplitterModule } from 'primeng/splitter';
import { DialogModule } from 'primeng/dialog';




@NgModule({
  declarations: [AddTankComponent,TankListComponent,ShowTankComponent],
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
    ConfirmPopupModule,
    ChipsModule,
    SplitterModule,
    FormsModule,
    DialogModule
  ]
})
export class CuvesModule { }
