import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';


@Component({
  selector: 'app-add-station-service',
  templateUrl: './add-station-service.component.html',
  styleUrl: './add-station-service.component.scss'
})
export class AddStationServiceComponent {
    items :MenuItem[];

    constructor(private servicestationService:ServicesStationsService){}

    ngOnInit(): void {
        this.items = this.servicestationService.items_step
    }

}
