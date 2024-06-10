import { Component, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Compagnie,
    Jauge,
    Product,
    StationService,
    Tank,
} from 'src/app/demo/models/model';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';
import { JaugeService } from 'src/app/demo/service/jauge.service';
import { TankService } from 'src/app/demo/service/tank.service';

@Component({
    selector: 'app-add-tank',
    templateUrl: './add-tank.component.html',
    styleUrl: './add-tank.component.scss',
})
export class AddTankComponent {
    allProducts: Product[];
    allCompagnies: Compagnie[];
    allstationservice: StationService[];
    allJauges: Jauge[];
    tankId: number;
    filteredTank: Tank;
    tankForm: FormGroup;
    loading: boolean = false;
    file: any;
    file1: any;
    disabled_value: boolean = true;
    isHovered: boolean = false;

    @ViewChild(FileUpload)
    fileUpload: FileUpload;

    constructor(
        private router: Router,
        private jaugeService: JaugeService,
        private compagniesService: CompagniesService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private tankService: TankService
    ) {}

    ngOnInit() {
        this.compagniesService.getAllCompany().subscribe((data) => {
            this.allCompagnies = data['data'];
        });

        this.jaugeService.getAlljauge().subscribe((data) => {
            this.allJauges = data['data'];
        });

        this.tankForm = this.formBuilder.group({
            abacus: [null],
            diameter: [null],
            liquid_type: [null],
            man_hole_height: [null],
            sensor_depth: [null],
            sensor_reference: [null],
            type_jauge: [null],
            name_ss: [null],
            name_entreprise: [null],
            name_product: [null],
            file_abacus: [null],
        });

        this.tankId = this.route.snapshot.params['tankId'];
        if (this.tankId) {
            this.tankService.showTank(this.tankId).subscribe((data) => {
                this.filteredTank = data['data'];
            });
        }
    }

    display_ss() {
        this.allstationservice =
            this.tankForm.value.name_entreprise.servicestations;
    }

    display_product() {
        this.allProducts = this.tankForm.value.name_ss.products;
    }

    handleFileUpload(event: Event) {
        this.disabled_value = false;
        this.file = (event.target as HTMLInputElement).files?.[0];

        // this.tankForm.get('file_abacus').setValue(this.file.name)

    }

    // deleteFile(): void {
    //     this.fileUpload.files = [];
    //     this.file = null
    //     this.tankForm.get('file_abacus').setValue(null)
    //     this.disabled_value = true

    // }

    onSubmitForm() {
        this.loading = true;

        console.log(this.tankForm.value);
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
