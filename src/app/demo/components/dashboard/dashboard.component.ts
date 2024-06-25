import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Compagnie } from '../../models/model';
import { Router } from '@angular/router';
import { CompagniesService } from '../../service/compagnies.service';
import { PusherService } from '../../service/pusher.service';
import { ServicesStationsService } from '../../service/servicesStations.service';
import { TankService } from '../../service/tank.service';
import { AlertService } from '../../service/alerts.service';
import Pusher from 'pusher-js';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
    allCompagnies;
    getInactiveTanks;
    getInactiveTankspusher=[]
    servicesStations;
    compagniesThisMonth;
    servicesStationsThisMonth;
    tanks;
    tanksbyCompany;
    tanksThisMonth;
    tanksThisDay;
    nballCompagnies;
    LastInsertTanks

    constructor(
        private compagniesService: CompagniesService,
        private router: Router,
        private PusherService: PusherService,
        private servicestationService: ServicesStationsService,
        private tankService: TankService,
        private AlertService: AlertService
    ) {}

    ngOnInit(): void {
        let currentMonth = new Date().getMonth() + 1; // Obtenir le mois actuel (1-12)
        let currentYear = new Date().getFullYear();

        this.compagniesService.getAllCompany().subscribe((data) => {
            this.allCompagnies = data['data'];

            this.nballCompagnies = this.allCompagnies.length;

            let compagniesThisMonth = this.allCompagnies.filter((compagnie) => {
                let compagnieDate = new Date(compagnie.created_at);
                return (
                    compagnieDate.getMonth() + 1 === currentMonth &&
                    compagnieDate.getFullYear() === currentYear
                );
            });
            this.compagniesThisMonth = compagniesThisMonth.length;
        });

        this.servicestationService.getAllservicestation().subscribe((data) => {
            let servicesStations = data['data'];
            this.servicesStations = servicesStations.length;

            let servicesStationsThisMonth = servicesStations.filter(
                (servicestation) => {
                    let servicestationDate = new Date(
                        servicestation.created_at
                    );
                    return (
                        servicestationDate.getMonth() + 1 === currentMonth &&
                        servicestationDate.getFullYear() === currentYear
                    );
                }
            );
            this.servicesStationsThisMonth = servicesStationsThisMonth.length;
            // this.name_entreprise = this.servicesStations.company.name
        });

        this.tankService.getAllTank().subscribe((data) => {
            let tanks = data['data'];
            this.tanks = tanks.length;

            let tanksThisMonth = tanks.filter((tank) => {
                let tankDate = new Date(tank.created_at);
                return (
                    tankDate.getMonth() + 1 === currentMonth &&
                    tankDate.getFullYear() === currentYear
                );
            });
            this.tanksThisMonth = tanksThisMonth.length;
        });

        var pusher = new Pusher('c8686a07ccd742ec6564', {
            cluster: 'mt1'
          });

          var channel = pusher.subscribe('alertsChannel');
          channel.bind('alertsevent', (data: any) => {

            this.getInactiveTankspusher.push(data);
            console.log(this.getInactiveTankspusher)

            this.getInactiveTanks = this.getInactiveTankspusher.length;
                let currentDate = new Date();
                let currentDay = currentDate.getDate();
                let currentMonth = currentDate.getMonth() + 1;
                let currentYear = currentDate.getFullYear();

                let alertsToday = this.getInactiveTankspusher.filter((alert) => {
                    let alertDate = new Date(alert.created_at);
                    return (
                        alertDate.getDate() === currentDay &&
                        alertDate.getMonth() + 1 === currentMonth &&
                        alertDate.getFullYear() === currentYear
                    );
                });

                this.tanksThisDay = alertsToday.length;

          });

          var channel = pusher.subscribe('lastInsertChannel');
          channel.bind('lastInsertevent', (data: any) => {

            this.LastInsertTanks.push(data);
            console.log(this.LastInsertTanks)
          });


    }
    navigation(route: string) {
        this.router.navigate([route]);
        console.log(route);
    }

    getAllTanks(company: any): any[] {
        let tanks: any[] = [];
        for (let service_station of company.servicestations) {
          tanks = [...tanks, ...service_station.tanks];
        }
        return tanks;
      }
}
