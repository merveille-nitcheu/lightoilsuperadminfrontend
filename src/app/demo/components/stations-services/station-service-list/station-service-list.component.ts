import { Component } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';

@Component({
  selector: 'app-station-service-list',
  templateUrl: './station-service-list.component.html',
  styleUrl: './station-service-list.component.scss'
})
export class StationServiceListComponent {


    constructor(private servicestationService:ServicesStationsService,private productService: ProductService){}

    products: Product[] = [];



    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
    }


}
