import { Injectable } from "@angular/core";


@Injectable({
  providedIn:'root'
})
 export class ServicesStationsService {



    items_step = [
        {
            label: 'Informations de base',
            routerLink: 'basic'
        },
        {
            label: 'Informations de Localisation ',
            routerLink: 'localisation'
        },
        {
            label: 'Validation ',
            routerLink: 'confirmation'
        },

    ];


    stationServiceInformation = {
        basicInformation: {
            name: '',
            entrprise: '',
            description: ''
        },
        LocalisationInformation: {
            ville: '',
            fuseau_horaire: '',
            longitude: '',
            latitude:''
        },

    };
 }
