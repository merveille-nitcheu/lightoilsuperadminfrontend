import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, StationService, Tank } from 'src/app/demo/models/model';
import { ProductService } from 'src/app/demo/service/product.service';
import { JaugeService } from 'src/app/demo/service/jauge.service';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';

@Component({
    selector: 'app-show-service-station',
    templateUrl: './show-service-station.component.html',
    styleUrl: './show-service-station.component.scss',
})
export class ShowServiceStationComponent {
    servicestationId: number;
    filteredStation: any;
    filteredStationsupp: any;
    allProducts: Product[] | undefined;
    ssForm: FormGroup;
    loading: boolean = false;
    ultrasonsTank: Tank[] = [];
    autresTank: Tank[] = [];

    constructor(
        private servicestationService: ServicesStationsService,
        private router: Router,
        private route: ActivatedRoute,
        private productService: ProductService,
        private formBuilder: FormBuilder,
        private jaugeService: JaugeService
    ) {}

    ngOnInit() {
        this.servicestationId = this.route.snapshot.params['ssId'];

        this.productService.getAllproduct().subscribe((data) => {
            this.allProducts = data['data'];
        });

        this.servicestationService
            .showServicestation(this.servicestationId)
            .subscribe((data) => {
                this.filteredStation = data['data'];
                this.filteredStationsupp = data['additionaldata'];
                this.ssForm = this.formBuilder.group({
                    name: this.filteredStation.name,
                    city: this.filteredStation.city,
                    name_entreprise: this.filteredStation.company.name,
                    gmt: this.filteredStation.gmt,
                    latitude: this.filteredStation.latitude,
                    longitude: this.filteredStation.longitude,
                    description: this.filteredStation.description,
                    totalcuves: this.filteredStationsupp.totalTanks,
                    scdp_delay_day:
                        this.filteredStationsupp.Parameter.scdp_delay_day,
                    critic_limit:
                        this.filteredStationsupp.Parameter.critic_limit,
                    product_name: this.filteredStationsupp.products,
                });

                const promises = this.filteredStationsupp?.Tanks.map((tank) => {
                    const jaugeId = tank?.jauge_id;
                    if (jaugeId) {
                      return this.jaugeService.getCodebyJaugeId(jaugeId).toPromise();
                    }
                    return Promise.resolve();
                  });

                  Promise.all(promises).then((responses) => {
                    responses.forEach((data, index) => {
                      const tank = this.filteredStationsupp?.Tanks[index];
                      if (data && data.response === true) {
                        this.ultrasonsTank?.push(tank);
                      } else {
                        this.autresTank?.push(tank);
                      }
                    });
                    console.log(this.ultrasonsTank);
                  });
                console.log(this.allProducts);
                console.log(this.ultrasonsTank);
                console.log('dfvd',this.autresTank);
            });
    }
}
