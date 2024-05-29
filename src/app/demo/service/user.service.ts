import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn:'root'
})
 export class UserService {


    roles = [
        { name: 'ADMIN', code: 'AD' },
        { name: 'SERVICESTATION', code: 'GE' },

    ];




    constructor(private http: HttpClient) { }



    getAlluser(){
      return this.http.get<any[]>(environment.apiUrl+'/user/getallusers')
    }

    storeuser(userInfos:any){
      return this.http.post<any[]>(environment.apiUrl+'/user/storeuser',userInfos)
    }



    desactiveuser(userId:number){
      return this.http.get<any[]>(environment.apiUrl+'/user/desactiveuser/'+ userId)

    }
 }
