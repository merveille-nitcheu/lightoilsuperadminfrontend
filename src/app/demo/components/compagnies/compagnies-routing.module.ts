import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCompagnieComponent } from './add-compagnie/add-compagnie.component';
import { CompagniesListComponent } from './compagnies-list/compagnies-list.component';



@NgModule({
    imports: [RouterModule.forChild([
        { path: 'addcompagnie', component: AddCompagnieComponent },
        { path: 'compagnielist', component: CompagniesListComponent}
    ])],
    exports: [RouterModule]
})
export class CompagniesRoutingModule { }
