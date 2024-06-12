import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AlertService {


    constructor(private http: HttpClient) {}

    getInactiveTanks() {
        return this.http.get<any[]>(environment.apiUrl + '/alerts/getInactiveTanks');
    }




}
