import { Component, OnInit} from '@angular/core';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';


@Component({
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService
            .getProductsSmall()
            .then((data) => (this.products = data));
    }
}
