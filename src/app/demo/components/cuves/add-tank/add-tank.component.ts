import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Jauge,
    Product,
    StationService,
    Tank,
} from 'src/app/demo/models/model';
import { JaugeService } from 'src/app/demo/service/jauge.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { ServicesStationsService } from 'src/app/demo/service/servicesStations.service';
import { TankService } from 'src/app/demo/service/tank.service';

@Component({
    selector: 'app-add-tank',
    templateUrl: './add-tank.component.html',
    styleUrl: './add-tank.component.scss',
})
export class AddTankComponent {
    allProducts: Product[];
    allstationservice: StationService[];
    allJauges: Jauge[];
    tankId: number;
    filteredTank: Tank;
    tankForm: FormGroup;
    loading: boolean = false;

    constructor(
        private router: Router,
        private productService: ProductService,
        private jaugeService: JaugeService,
        private servicesStationsService: ServicesStationsService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private tankService: TankService
    ) {}

    ngOnInit() {
        this.servicesStationsService
            .getAllservicestation()
            .subscribe((data) => {
                this.allstationservice = data['data'];
            });

        this.productService.getAllproduct().subscribe((data) => {
            this.allProducts = data['data'];
        });

        this.jaugeService.getAlljauge().subscribe((data) => {
            this.allJauges = data['data'];
        });

        this.tankForm = this.formBuilder.group({
            abacus: [null, [Validators.required]],
            diameter: [null, [Validators.required]],
            liquid_type: [null, [Validators.required]],
            man_hole_height: [null, [Validators.required]],
            sensor_depth: [null, [Validators.required]],
            sensor_reference: [null, [Validators.required]],
            type_jauge: [null, [Validators.required]],
            name_ss: [null, [Validators.required]],
            name_product: [null, [Validators.required]],
        });

        this.tankId = this.route.snapshot.params['tankId'];
        if (this.tankId) {
            this.tankService.showTank(this.tankId).subscribe((data) => {
                this.filteredTank = data['data'];
            });
        }
    }

    onSubmitForm() {
        this.loading = true;
        console.log(this.tankForm.value);
        this.router.navigateByUrl('cuves');
        this.tankService.storeTank(this.tankForm.value).subscribe(
            (response) => {
                this.tankForm.reset();
                this.router.navigateByUrl('cuves');
            },
            (error) => {
                console.error(
                    "Erreur lors de l'enregistrement de l'entreprise",
                    error
                );
            }
        );
    }

    onUpdateForm(tankId: number) {
        this.loading = true;
        this.tankService.updateTank(tankId, this.tankForm.value).subscribe(
            (response) => {
                this.tankForm.reset();
                this.router.navigateByUrl('cuves');
            },
            (error) => {
                console.error(
                    'Erreur lors de la mise à jour du produit',
                    error
                );
            }
        );
    }
}
