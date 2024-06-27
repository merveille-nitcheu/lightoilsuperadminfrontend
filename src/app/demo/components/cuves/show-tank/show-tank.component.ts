import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TankService } from 'src/app/demo/service/tank.service';
import { LoadingService } from 'src/app/demo/service/loading.service';
import { Observable } from 'rxjs';

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
    selectedRecords: any[] = [];
    data_temp: string[];
    data_level: string[];
    rangeDates: Date[];
    records;
    clonedRecords: { [s: number]: any } = {};
    tankForm: FormGroup;
    raw_datas: any;
    probe_sensors: any;
    isChanged: boolean = false;
    loading = false;
    chipValue: string;
    selectedChipIndex: any;
    dataType: any;
    visible: boolean = false;
    isLoading$: Observable<boolean>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tankService: TankService,
        private loadingService: LoadingService,
        private formBuilder: FormBuilder
    ) {
        this.isLoading$ = this.loadingService.isLoading$;
    }

    ngOnInit() {
        let tankId = this.route.snapshot.params['tankId'];
        this.tankService.showTank(tankId).subscribe((data) => {
            this.tankData = data['data'];
            this.records = this.tankData.records;

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

    sortDataLevel(dataType: string) {
        const dataControl = this.tankForm.get(dataType);
        if (dataControl) {
            const sortedData = [...dataControl.value].sort((a, b) => {
                const numA = parseInt(a.split(',')[0].trim());
                const numB = parseInt(b.split(',')[0].trim());
                return numA - numB;
            });
            dataControl.setValue(sortedData);
        }
    }

    //   dataControl.setValue('data_level');

    //   const dataControl = this.tankForm.get(this.dataType);
    //   dataControl.setValue(this.data_level);

    updateChipValue() {
        if (this.chipValue !== null) {
            const dataControl = this.tankForm.get(this.dataType);
            const updatedValue = [...dataControl.value];
            updatedValue[this.selectedChipIndex] = this.chipValue;
            dataControl.setValue(updatedValue);
            this.visible = false; // Fermer le modal
        }
        this.isChanged = true;
        this.sortDataLevel(this.dataType);
    }

    getDatetoFilter(recordDate) {
        let newDate = new Date(recordDate);
        newDate.setHours(newDate.getHours() + 1);
        return newDate;
    }

    getDate(recordDate) {
        let newDate = new Date(recordDate);
        newDate.setHours(newDate.getHours() + 1);
        return newDate.toLocaleString();
    }

    onElementChange(dataType: string): void {
        this.isChanged = true;
        this.sortDataLevel(dataType);
    }

    onUpdateForm(tankId: number) {
        this.loading = true;
        console.log(this.tankForm.value);
        // this.loadingService.setLoading(true);
        // this.tankService.updateTank(tankId, this.tankForm.value).subscribe(
        //     (response) => {
        //         this.tankForm.reset();
        //         this.ngOnInit();
        //         this.loading = false;
        //         this.loadingService.setLoading(false);
        //     },
        //     (error) => {
        //         console.error('Erreur lors de la mise à jour du tank', error);
        //     }
        // );
    }

    onRowEditInit(record: any) {
        if (record) {
            this.clonedRecords[record.id] = { ...record };
        }
    }

    onRowEditSave(record) {
        delete this.clonedRecords[record.id];

        const RecordData = {
            battery_level: record.battery_level,
            level: record.level,
            density: record.density,
            liquid_height: record.liquid_height,
            liquid_temperature: record.liquid_temperature,
            total_volume: record.total_volume,
            volume: record.volume,
            volume_at_fift: record.volume_at_fift,
        };
        console.log(RecordData);
        this.loadingService.setLoading(true);
        this.tankService.saveRecord(record.id, RecordData).subscribe(
            (response) => {
                this.ngOnInit();
                this.loadingService.setLoading(false);
                console.error('enregistrement de la record', response);
            },
            (error) => {
                console.error('enregistrement suppression de la record', error);
            }
        );
    }

    onRowEditCancel(record, index: number) {
        this.records[index] = this.clonedRecords[record.id];
        delete this.clonedRecords[record.id];
    }
    deleteRecord(idRecord: number) {
        this.loadingService.setLoading(true);
        this.tankService.deleteRecord(idRecord).subscribe(
            (response) => {
                this.ngOnInit();
                this.loadingService.setLoading(false);
                console.error('suppression de la record', response);
            },
            (error) => {
                console.error(
                    'Erreur lors de la suppression de la record',
                    error
                );
            }
        );
    }

    filterRecords() {
        if (this.rangeDates && this.rangeDates[1] == null) {
            this.records = this.tankData.records.filter((record) => {
                const recordDate = this.getDatetoFilter(
                    record.last_update
                ).getTime();
                const startDate = this.rangeDates[0].getTime();
                const endDate = startDate + 8640000;

                return recordDate >= startDate && recordDate <= endDate;
            });
        } else if (this.rangeDates && this.rangeDates.length === 2) {
            this.records = this.tankData.records.filter((record) => {
                console.log(new Date(record.created_at));
                const recordDate = this.getDatetoFilter(
                    record.last_update
                ).getTime();
                const startDate = this.rangeDates[0].getTime();
                const endDate = this.rangeDates[1].getTime();

                return recordDate >= startDate && recordDate <= endDate;
            });
        } else {
            // Réinitialiser les records si aucune plage de dates n'est sélectionnée
            this.tankService.getAllTank().subscribe((data) => {
                this.records = data['data'];
            });
        }
    }

    deleteselectedRecords() {
        const recordids = this.selectedRecords.map((record) => record.id);
        this.loadingService.setLoading(true);
        this.tankService.deleteRecords(recordids).subscribe(
            (response) => {
                this.ngOnInit();
                this.loadingService.setLoading(false);
                console.error('suppression de la record', response);
            },
            (error) => {
                console.error(
                    'Erreur lors de la suppression de la record',
                    error
                );
            }
        );
    }
}
