import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';
import { StationService } from 'src/app/demo/models/model';
import { Router } from '@angular/router';
import { ConfirmationService} from 'primeng/api';
import { format } from 'date-fns';

@Component({
  selector: 'app-station-service-list',
  templateUrl: './station-service-list.component.html',
  styleUrl: './station-service-list.component.scss'
})
export class StationServiceListComponent {

    constructor(private servicestationService:ServicesStationsService,private confirmationService: ConfirmationService,private router:Router){}

    servicesStations: StationService[] = [];
    selectedStation!: StationService;
    stationId!:number

    ngOnInit() {
        this.servicestationService.getAllservicestation().subscribe((data) => {
            this.servicesStations = data['data'];
        });
    }

    Details(ssId:any) {
        console.log(ssId)
        this.router.navigateByUrl(`service_station/showservice_station/${ssId}`);
    }

    deleteSelectedStationService(ssId:any) {

        this.confirmationService.confirm({
            message: 'Voulez-vous vraiment supprimer la station service selectionnée.',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check mr-1',
            rejectIcon: 'pi pi-times mr-1',
            rejectButtonStyleClass: 'p-button-danger p-button-sm',
            acceptButtonStyleClass: 'p-button-outlined p-button-sm',
            accept: () => {
                this.servicestationService.deleteservicestation(ssId).subscribe(
                    (response) => {
                        window.location.reload();
                        console.error('suppression de la stationservice', response);
                    },
                    (error) => {
                      console.error('Erreur lors de la suppression de la servicestation', error);
                    }
                  );

            },
            reject: () => {

            }
        });

    }


}
