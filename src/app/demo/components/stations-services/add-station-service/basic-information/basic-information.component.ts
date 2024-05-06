import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compagnie, Product } from 'src/app/demo/models/model';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';
import { ProductService } from '../../../../service/product.service';
import { ServicesStationsService } from '../../../../service/servicesStations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss'
})
export class BasicInformationComponent {

    constructor(private compagniesService:CompagniesService,private router: Router,private productService: ProductService,private servicesStationsService:ServicesStationsService,  private formBuilder: FormBuilder,){}

    allCompagnies: Compagnie[] | undefined;
    allProducts: Product[] | undefined;
    basicInformation:any
    basicInformationForm!: FormGroup;


    ngOnInit() {
        this.compagniesService.getAllCompany().subscribe((data) =>{
            this.allCompagnies = data['data'];
    })

    this.productService.getAllproduct().subscribe((data) => {
        this.allProducts = data['data'];
    });

    this.basicInformation = this.servicesStationsService.stationServiceInformation.basicInformation



    this.basicInformationForm = this.formBuilder.group({
        name: [null, [Validators.required]],
        entreprise: [null, [Validators.required]],
        description: [null],
        product_name: [null, [Validators.required]],
        logo_ss: [null],

    });

    }

    nextPage(){
        this.servicesStationsService.stationServiceInformation.basicInformation = this.basicInformationForm.value;
        console.log( this.servicesStationsService.stationServiceInformation.basicInformation)

        this.router.navigateByUrl('service_station/addservice_station/localisation');
    }

}
