import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';

@Component({
  selector: 'app-confirmation-information',
  templateUrl: './confirmation-information.component.html',
  styleUrl: './confirmation-information.component.scss'
})
export class ConfirmationInformationComponent {

    stationServiceInformation:any
    loading: boolean = false;


    constructor(private router: Router,private servicesStationsService:ServicesStationsService){}

    ngOnInit() {
        this.stationServiceInformation = this.servicesStationsService.stationServiceInformation
        console.log(this.stationServiceInformation)

    }


    prevPage(){

        this.router.navigateByUrl('service_station/addservice_station/localisation');
    }

    valider(){

        this.loading = true
        this.servicesStationsService.storeServicestation(this.stationServiceInformation).subscribe(
            (response) => {

                this.router.navigateByUrl('/service_station/service_servicelist');
            },
            (error) => {
              console.error('Erreur lors de l\'enregistrement du produit', error);
            }
          );

    }

}
