import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localisation-information',
  templateUrl: './localisation-information.component.html',
  styleUrl: './localisation-information.component.scss'
})
export class LocalisationInformationComponent {

    constructor(private router: Router){}

    nextPage(){

        this.router.navigateByUrl('service_station/addservice_station/confirmation');
    }

    prevPage(){

        this.router.navigateByUrl('service_station/addservice_station/basic');
    }

}
