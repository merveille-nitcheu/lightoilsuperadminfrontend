import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';
import { LoadingService } from 'src/app/demo/service/loading.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-add-station-service',
    templateUrl: './add-station-service.component.html',
    styleUrl: './add-station-service.component.scss',
})
export class AddStationServiceComponent {
    items: MenuItem[];
    isLoading$: Observable<boolean>;
    isLoading: boolean = false;

    constructor(private servicestationService: ServicesStationsService,private loadingService: LoadingService
    ) {
        this.isLoading$ = this.loadingService.isLoading$;
        this.isLoading$.subscribe((loading) => {
            this.isLoading = loading;
          });
    }

    ngOnInit(): void {
        this.items = this.servicestationService.items_step;
    }

    onChildLoadingChange(isLoading: boolean) {
        this.loadingService.setLoading(isLoading); // Assuming you have a method to update the loading state
      }

}
