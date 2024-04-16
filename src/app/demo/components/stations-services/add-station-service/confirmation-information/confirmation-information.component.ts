import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-information',
  templateUrl: './confirmation-information.component.html',
  styleUrl: './confirmation-information.component.scss'
})
export class ConfirmationInformationComponent {

    constructor(private router: Router){}

    prevPage(){

        this.router.navigateByUrl('service_station/addservice_station/localisation');
    }


}
