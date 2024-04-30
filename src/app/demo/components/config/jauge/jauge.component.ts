import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Jauge } from 'src/app/demo/models/model';
import { JaugeService } from 'src/app/demo/service/jauge.service';

@Component({
  selector: 'app-jauge',
  templateUrl: './jauge.component.html',
  styleUrl: './jauge.component.scss'
})
export class JaugeComponent {

    allJauges: Jauge[] = [];
    jaugeForm!: FormGroup;
    selectedJauge!: Jauge;
    nbserviceStations:number = 0
    loading: boolean = false;

    constructor(
        private jaugeService: JaugeService,
        private formBuilder: FormBuilder,

    ) {}

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
        this.loading = true
        this.jaugeService.storeJauge(this.jaugeForm.value).subscribe(
            (response) => {
              this.jaugeForm.reset();

              window.location.reload();
            },
            (error) => {
              console.error('Erreur lors de l\'enregistrement du produit', error);
            }
          );

    }


    onUpdateForm(jaugeId: number) {
        this.loading = true
        this.jaugeService.updateJauge(jaugeId, this.jaugeForm.value).subscribe(
          (response) => {
            this.jaugeForm.reset();
            window.location.reload();

          },
          (error) => {
            console.error('Erreur lors de la mise à jour du produit', error);
          }
        );
      }

    deleteJauge(jaugeId:number){
        this.jaugeService.deleteJauge(jaugeId).subscribe(
            (response) => {
                window.location.reload();

            },
            (error) => {
              console.error('Erreur lors de la suppression du produit', error);
            }
          );
    }

   showselectedJauge(){
    let nbserviceStations = Object.keys(this.selectedJauge.nbserviceStations).length

   }

}
