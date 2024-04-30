import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';

@Component({
  selector: 'app-localisation-information',
  templateUrl: './localisation-information.component.html',
  styleUrl: './localisation-information.component.scss'
})
export class LocalisationInformationComponent {


    localisationInformation:any
    localisationInformationForm!: FormGroup;

    constructor(private router: Router,private formBuilder:FormBuilder,private servicesStationsService:ServicesStationsService){}

    ngOnInit() {
        this.localisationInformation = this.servicesStationsService.stationServiceInformation.localisationInformation


    this.localisationInformationForm = this.formBuilder.group({
        ville: [null],
        fuseau_horaire: [null,],
        longitude: [null],
        latitude: [null, ],


    });
}

    nextPage(){
        this.servicesStationsService.stationServiceInformation.localisationInformation = this.localisationInformationForm.value;

        this.router.navigateByUrl('service_station/addservice_station/confirmation');
    }

    prevPage(){

        this.router.navigateByUrl('service_station/addservice_station/basic');
    }

}
