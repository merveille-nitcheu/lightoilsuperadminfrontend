import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/env";


@Injectable({
  providedIn:'root'
})
 export class ServicesStationsService {


    cities = [
        { name: 'Douala', code: 'NY' },
        { name: 'Yaounde', code: 'RM' },
        { name: 'Limbe', code: 'LDN' },
        { name: 'Garoua', code: 'IST' },
        { name: 'Kribi', code: 'PRS' }
    ];

    regions = [
        { name: 'Douala', code: 'NY' },
        { name: 'Yaounde', code: 'RM' },
        { name: 'Limbe', code: 'LDN' },
        { name: 'Garoua', code: 'IST' },
        { name: 'Kribi', code: 'PRS' }
    ];



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
            entreprise: '',
            description: '',
            product_name: [],
            logo_ss:''
        },
        localisationInformation: {
            // ville: '',
            // region:'',
            fuseau_horaire: '',
            longitude: '',
            latitude:'',
            address:'',


        },

    };


    constructor(private http: HttpClient) { }



    getAllservicestation(){
      return this.http.get<any[]>(environment.apiUrl+'/servicestation/getallservicestation')
    }

    storeServicestation(servicestationInfos:any){
      return this.http.post<any[]>(environment.apiUrl+'/servicestation/storeservicestation',servicestationInfos)
    }

    showServicestation(servicestationId:number){
      return this.http.get<any[]>(environment.apiUrl+'/servicestation/showservicestation/'+servicestationId)
    }

    updateservicestation(servicestationId:number,servicestationInfos:any){
      return this.http.post<any[]>(environment.apiUrl+'/servicestation/updateservicestation/'+servicestationId,servicestationInfos)
    }

    deleteservicestation(servicestationId:number){
      return this.http.delete<any[]>(environment.apiUrl+'/servicestation/destroyservicestation/'+servicestationId)
    }
 }
