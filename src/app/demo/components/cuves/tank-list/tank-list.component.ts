import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TankService } from 'src/app/demo/service/tank.service';
import { Router } from '@angular/router';
import { ConfirmationService} from 'primeng/api';
import { Tank } from 'src/app/demo/models/model';

@Component({
  selector: 'app-tank-list',
  templateUrl: './tank-list.component.html',
  styleUrl: './tank-list.component.scss'
})
export class TankListComponent {
    tanks: Tank[] = [];

    selectedtank!: Tank;

    constructor(private tankService:TankService,private router:Router,private confirmationService: ConfirmationService,){}
    ngOnInit() {
        this.tankService.getAllTank().subscribe((data) => {
            this.tanks = data['data'];
        });

    }

    Details(tankId: any) {
        this.router.navigateByUrl(`cuves/showtank/${tankId}`);
    }


    deleteSelectedTank(tankId: any) {
        this.confirmationService.confirm({
            message: 'Voulez-vous vraiment supprimer la cuve selectionnée.',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check mr-1',
            rejectIcon: 'pi pi-times mr-1',
            rejectButtonStyleClass: 'p-button-danger p-button-sm',
            acceptButtonStyleClass: 'p-button-outlined p-button-sm',
            accept: () => {
                this.tankService.deleteTank(tankId).subscribe(
                    (response) => {
                        window.location.reload();
                        console.error('suppression de la cuve', response);
                    },
                    (error) => {
                      console.error('Erreur lors de la suppression de la cuve', error);
                    }
                  );

            },
            reject: () => {

            }
        });
    }

}
