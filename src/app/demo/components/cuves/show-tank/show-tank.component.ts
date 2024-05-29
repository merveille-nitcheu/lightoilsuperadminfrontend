import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, Tank } from 'src/app/demo/models/model';
import { TankService } from 'src/app/demo/service/tank.service';

@Component({
    selector: 'app-show-tank',
    templateUrl: './show-tank.component.html',
    styleUrl: './show-tank.component.scss',
})
export class ShowTankComponent {
    tankData: any;
    tankAdditionalData: any;
    Level_active_depotage: number;
    abacusResults: string[];
    data_pressure: string[];
    data_temp: string[];
    data_level: string[];
    record: any;
    tankForm: FormGroup;
    raw_datas: any;
    probe_sensors: any;
    isChanged: boolean = false;
    loading = false;
    chipValue: string;
    selectedChipIndex: any;
    dataType: any;
    visible: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tankService: TankService,

        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        let tankId = this.route.snapshot.params['tankId'];
        this.tankService.showTank(tankId).subscribe((data) => {
            this.tankData = data['data'];

            this.tankAdditionalData = data['additionaldata'];
            this.Level_active_depotage = parseFloat(
                this.tankData.level_active_depotage
            );
            this.abacusResults = this.tankData.abacus
                .split(';')
                .filter((value) => value.trim() !== '');
            this.data_temp = this.tankData.correction_data.data_temp
                .split(';')
                .filter((value) => value.trim() !== '');
            this.data_level = this.tankData.correction_data.data_level
                .split(';')
                .filter((value) => value.trim() !== '');
            this.data_pressure = this.tankData.correction_data.data_pressure
                .split(';')
                .filter((value) => value.trim() !== '');
            this.record = this.tankAdditionalData.record;
            this.raw_datas = this.tankAdditionalData.raw_datas;
            this.probe_sensors = this.tankAdditionalData.probe_sensors;

            this.tankForm = this.formBuilder.group({
                man_hole_height: [this.tankData?.man_hole_height],
                sensor_depth: [this.tankData?.sensor_depth],
                sensor_reference: [this.tankData?.sensor_reference],
                level_active_depotage: [this.Level_active_depotage],
                data_temp: [this.data_temp],
                abacusResults: [this.abacusResults],
                data_level: [this.data_level],
                data_pressure: [this.data_pressure],
            });
        });
    }

    onChipClick(event: any, dataType: string) {
        this.isChanged = true;
        this.chipValue = event.value;
        this.dataType = dataType;
        this.selectedChipIndex = this.tankForm
            .get(dataType)
            .value.indexOf(event.value);

        this.visible = true;
    }

    updateChipValue() {
        if (this.chipValue !== null) {
            const dataControl = this.tankForm.get(this.dataType);
            const updatedValue = [...dataControl.value];
            updatedValue[this.selectedChipIndex] = this.chipValue;
            dataControl.setValue(updatedValue);
            this.visible = false; // Fermer le modal
        }

    }

    onElementChange(): void {
        this.isChanged = true;
    }

    onUpdateForm(tankId: number) {
        this.loading = true;
        this.tankService.updateTank(tankId, this.tankForm.value).subscribe(
            (response) => {
                this.tankForm.reset();
                window.location.reload();
            },
            (error) => {
                console.error('Erreur lors de la mise à jour du tank', error);
            }
        );
    }
}
