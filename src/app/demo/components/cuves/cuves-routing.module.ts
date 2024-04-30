import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TankListComponent } from './tank-list/tank-list.component';
import { AddTankComponent } from './add-tank/add-tank.component';








@NgModule({
    imports: [RouterModule.forChild([

        { path: '', component: TankListComponent },
        { path: 'addtank', component: AddTankComponent },
        { path: 'addtank/:companyId', component: AddTankComponent },

    ])],
    exports: [RouterModule]
})


export class CuveRoutingModule
 {

}