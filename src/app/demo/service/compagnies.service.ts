import { Injectable } from "@angular/core";


@Injectable({
  providedIn:'root'
})
 export class CompagniesService {


    compagnies = [
        { name: 'Bocom', code: 'NY' },
        { name: 'Tradex', code: 'RM' },
        { name: 'Petrolex', code: 'LDN' },
    ];




 }
