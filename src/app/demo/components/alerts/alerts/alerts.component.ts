import { Component } from '@angular/core';
import { AlertService } from '../../../service/alerts.service';
import { PusherService } from 'src/app/demo/service/pusher.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import Pusher from 'pusher-js';


@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrl: './alerts.component.scss',
})
export class AlertsComponent {
    private notificationSound: HTMLAudioElement;

    getInactiveTanks= [];
    expandedRows = {};
    menu: Menu;
    items: MenuItem[] | undefined;
    globalFilterFields: any;
    alerts

    constructor(private pusherService: PusherService,private productService: ProductService,private AlertService: AlertService) {
        this.notificationSound = new Audio('assets/sounds/Cavalerie.mp3');
    }

    ngOnInit(): void {


        var pusher = new Pusher('754b452e0542aa79ebfd', {
            cluster: 'mt1'
          });

          var channel = pusher.subscribe('alertsChannel');
          channel.bind('alertsevent', (data: any) => {
            this.notificationSound.play().catch((error) => {
                console.error('Erreur lors de la lecture du son:', error);
            });
            this.getInactiveTanks.push(data);

          });




        // // this.AlertService.getInactiveTanks().subscribe((data) => {
        // //     this.getInactiveTanks = data['inactiveTanks'];
        // //     console.log('alerts',this.getInactiveTanks)
        // // });
        // this.pusherService.channel.bind('alertsevent', (data: any) => {
        //     this.getInactiveTanks.push(data);
        //     // this.notificationSound.play().catch((error) => {
        //     //     console.error('Erreur lors de la lecture du son:', error);
        //     // });
        //     console.log(this.getInactiveTanks)
        // });

        // this.pusherService.getInactiveTanks$.subscribe(tanks => {
        //     this.getInactiveTanks = tanks;
        //     console.log(this.getInactiveTanks); // Log data here
        //   });





    //     Pusher.logToConsole = true;


        this.items = [
            {
                label: 'Type de sonde',

                command: () => {
                    this.onMenuSelect('Filter1');
                    this.menu.hide();
                },
            },
            {
                label: 'Station service',

                command: () => {
                    this.onMenuSelect('Filter2');
                    this.menu.hide();
                },
            },
            {
                label: 'Produit',

                command: () => {
                    this.onMenuSelect('Filter3');
                    this.menu.hide();
                },
            },
            {
                label: 'Entreprise',
                command: () => {
                    this.onMenuSelect('Filter4');
                    this.menu.hide();
                },
            },
        ];

        this.globalFilterFields = 'sensor_reference';

    }

    expandAll() {
        this.expandedRows = this.getInactiveTanks.reduce((acc, p) => (acc[p.id] = true) && acc, {});
    }

    onMenuSelect(label: any) {
        switch (label) {
            case 'Filter1':
                this.globalFilterFields = 'jauge';
                break;
            case 'Filter2':
                this.globalFilterFields =
                    'stationProduct.name_stationservice.name';
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

    collapseAll() {
        this.expandedRows = {};
    }
}
