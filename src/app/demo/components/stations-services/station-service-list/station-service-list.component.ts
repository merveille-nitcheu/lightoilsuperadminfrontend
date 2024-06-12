import { Component } from '@angular/core';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';
import { StationService } from 'src/app/demo/models/model';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { LoadingService } from 'src/app/demo/service/loading.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-station-service-list',
    templateUrl: './station-service-list.component.html',
    styleUrl: './station-service-list.component.scss',
})
export class StationServiceListComponent {
    constructor(
        private servicestationService: ServicesStationsService,
        private confirmationService: ConfirmationService,
        private router: Router,
        private loadingService: LoadingService
    ) {
        this.isLoading$ = this.loadingService.isLoading$;
    }

    servicesStations: StationService[] = [];
    selectedStation!: StationService;
    stationId!: number;
    name_entreprise: any;
    isLoading$: Observable<boolean>;

    ngOnInit() {
        this.servicestationService.getAllservicestation().subscribe((data) => {
            this.servicesStations = data['data'];
            // this.name_entreprise = this.servicesStations.company.name
        });
    }

    Details(ssId: any) {
        this.router.navigate(['service_station', 'showservice_station', ssId], {
            replaceUrl: true,
        });

    }

    deleteSelectedStationService(ssId: any) {
        this.confirmationService.confirm({
            message:
                'Voulez-vous vraiment supprimer la station service selectionnée.',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check mr-1',
            rejectIcon: 'pi pi-times mr-1',
            rejectButtonStyleClass: 'p-button-danger p-button-sm',
            acceptButtonStyleClass: 'p-button-outlined p-button-sm',
            accept: () => {
                this.loadingService.setLoading(true);
                this.servicestationService.deleteservicestation(ssId).subscribe(
                    (response) => {
                        this.ngOnInit();
                        this.loadingService.setLoading(false);
                        console.error(
                            'suppression de la stationservice',
                            response
                        );
                    },
                    (error) => {
                        console.error(
                            'Erreur lors de la suppression de la servicestation',
                            error
                        );
                    }
                );
            },
            reject: () => {},
        });
    }
}
