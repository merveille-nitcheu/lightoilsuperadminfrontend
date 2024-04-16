import { Component } from '@angular/core';
import { Customer } from 'src/app/demo/api/customer';
import { Product } from 'src/app/demo/api/product';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';
import { CustomerService } from 'src/app/demo/service/customer.service';


@Component({
    selector: 'app-compagnies-list',
    templateUrl: './compagnies-list.component.html',
    styleUrl: './compagnies-list.component.scss',
})
export class CompagniesListComponent {
    constructor(
        private compagniesService: CompagniesService,
        private customerService:CustomerService
    ) {}
    customers: Customer[] = [];

    ngOnInit() {
        this.customerService
            .getCustomersLarge()
            .then((data) => (this.customers = data));
    }
}
