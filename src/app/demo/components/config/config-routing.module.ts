import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { JaugeComponent } from './jauge/jauge.component';



@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', component: ProductsComponent},
        { path: 'jauge', component: JaugeComponent},

    ])],
    exports: [RouterModule]
})
export class ConfigRoutingModule { }
