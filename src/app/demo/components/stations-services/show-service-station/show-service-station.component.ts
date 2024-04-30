import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StationService } from 'src/app/demo/models/model';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';

@Component({
  selector: 'app-show-service-station',
  templateUrl: './show-service-station.component.html',
  styleUrl: './show-service-station.component.scss'
})
export class ShowServiceStationComponent {

    servicestationId:number
    filteredStation:StationService[]
    filteredStationsupp:any[]
    longitude:any
    latitude:any


    constructor(private servicestationService: ServicesStationsService,private router:Router,private route:ActivatedRoute) {}

ngOnInit(){
    this.servicestationId = this.route.snapshot.params['ssId'];
    console.log(this.servicestationId)

    this.servicestationService.showServicestation(this.servicestationId).subscribe((data) =>{
        this.filteredStation = [data['data']];
        this.longitude = this.filteredStation[0].longitude
        this.latitude = this.filteredStation[0].latitude
        this.filteredStationsupp = [data['additionaldata']];
        console.log(this.filteredStationsupp[0])
})
}


}
