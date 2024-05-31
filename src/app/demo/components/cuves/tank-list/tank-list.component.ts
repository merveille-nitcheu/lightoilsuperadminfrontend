import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TankService } from 'src/app/demo/service/tank.service';
import { Router } from '@angular/router';
import { ConfirmationService} from 'primeng/api';
import { Tank } from 'src/app/demo/models/model';
import { Menu } from 'primeng/menu';


@Component({
  selector: 'app-tank-list',
  templateUrl: './tank-list.component.html',
  styleUrl: './tank-list.component.scss'
})
export class TankListComponent {
     menu: Menu;
    tanks: Tank[] = [];
    field:any

    selectedtank!: Tank;
    items: MenuItem[] | undefined;
    globalFilterFields:any

    constructor(private tankService:TankService,private router:Router,private confirmationService: ConfirmationService,){}
    ngOnInit() {
        this.tankService.getAllTank().subscribe((data) => {
            this.tanks = data['data'];
        });
        this.items = [
            {
                label: 'Type de sonde',

                command: () => {
                    this.onMenuSelect('Filter1')
                    this.menu.hide();
                }
            },
            {
                label: 'Station service',

                command: () => {
                    this.onMenuSelect('Filter2')
                    this.menu.hide();
                }
            },
            {
                label: 'Produit',

                command: () => {
                    this.onMenuSelect('Filter3')
                    this.menu.hide();
                }
            },
            {
                label: 'Entreprise',
                command: () => {
                    this.onMenuSelect('Filter4')
                    this.menu.hide();
                }
            },
        ];

        this.globalFilterFields = 'sensor_reference';




    }

    onMenuSelect(label: any) {


        switch (label) {
            case 'Filter1':
                this.globalFilterFields = 'jauge';
                break;
            case 'Filter2':
                this.globalFilterFields = 'stationProduct.name_stationservice.name';
                break;
            case 'Filter3':
                this.globalFilterFields = 'stationProduct.nameproduct.name';
                break;
            case 'Filter4':
                this.globalFilterFields = 'stationProduct.name_entreprise.name';
                break;
            default:
                break;
        }
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
