import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { AlertRoutingModule } from './alert-routing.module';
import { BadgeModule } from 'primeng/badge';



@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    FieldsetModule,
    CardModule,
    AlertRoutingModule,
    BadgeModule
  ]
})
export class AlertsModule { }
