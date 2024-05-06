import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JaugeService {

  constructor(private http: HttpClient) { }

  getAlljauge(){
    return this.http.get<any[]>(environment.apiUrl+'/jauge/getalljauge')
  }

  storeJauge(jaugeInfos:any){
    return this.http.post<any[]>(environment.apiUrl+'/jauge/storejauge',jaugeInfos)
  }

  showJauge(jaugeId:number){
    return this.http.get<any[]>(environment.apiUrl+'/jauge/showjauge/'+jaugeId)
  }

  updateJauge(jaugeId:number,jaugeInfos:any){
    return this.http.post<any[]>(environment.apiUrl+'/jauge/updatejauge/'+jaugeId,jaugeInfos)
  }

  deleteJauge(jaugeId:number){
    return this.http.delete<any[]>(environment.apiUrl+'/jauge/destroyjauge/'+jaugeId)
  }

  getCodebyJaugeId(jaugeId:number){
    return this.http.get<any[]>(environment.apiUrl+'/jauge/getCodebyJaugeId/'+jaugeId)
  }


}
