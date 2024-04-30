import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsMixed() {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }


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
