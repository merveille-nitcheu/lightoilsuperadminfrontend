import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ConfigRoutingModule } from './config-routing.module';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { JaugeComponent } from './jauge/jauge.component';





@NgModule({
  declarations: [ProductsComponent,JaugeComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    TableModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    ReactiveFormsModule
  ]
})
export class ConfigModule { }
