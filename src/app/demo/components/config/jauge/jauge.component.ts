import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Jauge } from 'src/app/demo/models/model';
import { JaugeService } from 'src/app/demo/service/jauge.service';
import { LoadingService } from 'src/app/demo/service/loading.service';

@Component({
    selector: 'app-jauge',
    templateUrl: './jauge.component.html',
    styleUrl: './jauge.component.scss',
})
export class JaugeComponent {
    allJauges: Jauge[] = [];
    jaugeForm!: FormGroup;
    selectedJauge!: Jauge;
    nbserviceStations: number = 0;
    loading: boolean = false;
    filteredJauge: any;
    stationCount = 0;
    stations = [];
    isLoading$: Observable<boolean>;

    constructor(
        private jaugeService: JaugeService,
        private formBuilder: FormBuilder,
        private router: Router,
        private loadingService: LoadingService
    ) {
        this.isLoading$ = this.loadingService.isLoading$;
    }

    ngOnInit(): void {
        this.jaugeService.getAlljauge().subscribe((data) => {
            this.allJauges = data['data'];
        });

        this.jaugeForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            price: [null, [Validators.required]],
        });
    }

    onSubmitForm() {
        this.loading = true;
        this.loadingService.setLoading(true);
        this.jaugeService.storeJauge(this.jaugeForm.value).subscribe(
            (response) => {
                this.jaugeForm.reset();

                this.ngOnInit();
                this.loading = false;
                  this.loadingService.setLoading(false);
            },
            (error) => {
                console.error(
                    "Erreur lors de l'enregistrement du produit",
                    error
                );
            }
        );
    }

    onUpdateForm(jaugeId: number) {
        this.loading = true;
        this.loadingService.setLoading(true);
        this.jaugeService.updateJauge(jaugeId, this.jaugeForm.value).subscribe(
            (response) => {
                this.jaugeForm.reset();
                this.ngOnInit();
                this.loading = false;
                  this.loadingService.setLoading(false);
            },
            (error) => {
                console.error(
                    'Erreur lors de la mise à jour du produit',
                    error
                );
            }
        );
    }

    deleteJauge(jaugeId: number) {
        this.loadingService.setLoading(true);
        this.jaugeService.deleteJauge(jaugeId).subscribe(
            (response) => {
                this.ngOnInit();
                this.loadingService.setLoading(false);
            },
            (error) => {
                console.error(
                    'Erreur lors de la suppression du produit',
                    error
                );
            }
        );
    }

    showselectedJauge() {
        this.jaugeService.showJauge(this.selectedJauge.id).subscribe((data) => {
            this.filteredJauge = data['data'];

            // Initialisation du tableau des stations et du compteur
            this.stations = [];
            this.stationCount = 0;

            // Parcours des réservoirs de la jauge sélectionnée
            for (const tank of this.filteredJauge.tanks) {
                const stationName = tank.name_stationservice;
                const stationAddress = tank.adress_stationservice;

                // Vérification si la station existe déjà dans le tableau
                if (
                    !this.stations.some(
                        (station) =>
                            station.name === stationName &&
                            station.address === stationAddress
                    )
                ) {
                    // Ajout de la nouvelle station au tableau
                    this.stations.push({
                        name: stationName,
                        address: stationAddress,
                        id: tank.id_stationservice,
                    });
                    this.stationCount++;
                }
            }
        });
    }

    showDetails(ssId) {
        this.router.navigate(['service_station', 'showservice_station',ssId], { replaceUrl: true });
    }
}
