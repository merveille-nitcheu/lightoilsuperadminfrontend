import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                items: [
                    {
                        label: 'Tableau de bord',
                        icon: 'pi pi-fw pi-chart-line',
                        routerLink: ['/'],
                    },

                    {
                        label: 'Entreprises',
                        icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: 'liste des entreprises',
                                icon: 'pi pi-fw pi-align-justify',
                                routerLink: ['/compagnies/compagnielist'],
                            },
                            {
                                label: 'Ajouter une entreprise',
                                icon: 'pi pi-fw pi-plus',
                                routerLink: ['/compagnies/addcompagnie']
                            },

                        ]

                    },

                    {
                        label: 'Stations Services',
                        icon: 'pi pi-fw pi-th-large',
                        items: [
                            {
                                label: 'liste des stations services',
                                icon: 'pi pi-fw pi-align-justify',
                                routerLink: ['/service_station/service_servicelist'],
                            },
                            {
                                label: 'Ajouter une station service',
                                icon: 'pi pi-fw pi-plus',
                                routerLink: ['/service_station/addservice_station']
                            },

                        ]
                    },

                    {
                        label: 'Cuves',
                        icon: 'pi pi-fw pi-database',
                        routerLink: ['/uikit/misc'],
                    },

                    {
                        label: 'Utilisateurs',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/uikit/misc'],
                    },
                    {
                        label: 'Alerts',
                        icon: 'pi pi-fw pi-bell',
                        routerLink: ['/uikit/misc'],
                    },





                ],
            },
        ];
    }
}
