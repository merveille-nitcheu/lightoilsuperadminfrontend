import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compagnie } from 'src/app/demo/models/model';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss'
})
export class BasicInformationComponent {

    constructor(private copagniesService:CompagniesService,private router: Router){}

    compagnies: Compagnie[] | undefined;

    selectedCompagny: Compagnie | undefined;

    ngOnInit() {
        this.compagnies = this.copagniesService.compagnies
    }

    nextPage(){

        this.router.navigateByUrl('service_station/addservice_station/localisation');
    }

}
