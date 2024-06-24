import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { AlertRoutingModule } from './alert-routing.module';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';



@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    FieldsetModule,
    CardModule,
    AlertRoutingModule,
    BadgeModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    TabViewModule,
    TagModule
  ]
})
export class AlertsModule { }
