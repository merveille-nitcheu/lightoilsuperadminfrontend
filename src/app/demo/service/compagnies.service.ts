import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/env";
import { Compagnie } from "../models/model";


@Injectable({
  providedIn:'root'
})
 export class CompagniesService {



    constructor(private http: HttpClient) { }

  getAllCompany(){
    return this.http.get<Compagnie[]>(environment.apiUrl+'/company/getallcompanies')
  }

  storeCompany(companyInfos:any){
    return this.http.post<any[]>(environment.apiUrl+'/company/storecompany',companyInfos)
  }

  showCompany(companyId:number){
    return this.http.get<any[]>(environment.apiUrl+'/company/showcompany/'+companyId)
  }

  updateCompany(companyId:number,companyInfos:any){
    return this.http.post<any[]>(environment.apiUrl+'/company/updatecompany/'+companyId,companyInfos)
  }

  deleteCompany(companyIds:number[]){
    return this.http.post<any[]>(environment.apiUrl+'/company/destroycompany',companyIds)
  }


 }
