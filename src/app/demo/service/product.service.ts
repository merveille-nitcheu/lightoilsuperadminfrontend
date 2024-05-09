import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
  })
export class ProductService {

    constructor(private http: HttpClient) { }


    getAllproduct(){
      return this.http.get<any[]>(environment.apiUrl+'/product/getallproduct')
    }

    storeProduct(productInfos:any){
      return this.http.post<any[]>(environment.apiUrl+'/product/storeproduct',productInfos)
    }

    showProduct(productId:number){
      return this.http.get<any[]>(environment.apiUrl+'/product/showproduct/'+productId)
    }

    updateProduct(productId:number,productInfos:any){
      return this.http.post<any[]>(environment.apiUrl+'/product/updateproduct/'+productId,productInfos)
    }

    deleteProduct(productId:number){
      return this.http.delete<any[]>(environment.apiUrl+'/product/destroyproduct/'+productId)
    }


}
