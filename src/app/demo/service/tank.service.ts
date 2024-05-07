import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class TankService {


    items_tank = [
        {

        label: '',
        icon: 'pi pi-fw pi-ellipsis-v',
        items: [
            {
                label: 'Details',
                icon: 'pi pi-fw pi-eye',

            } ,
            {
                label: 'Supprimer',
                icon: 'pi pi-fw pi-trash',

            } ,
        ]
        },
    ];

    constructor(private http: HttpClient) {}

    getAllTank() {
        return this.http.get<any[]>(environment.apiUrl + '/tank/getalltank');
    }

    storeTank(tankInfos: any) {
        return this.http.post<any[]>(
            environment.apiUrl + '/tank/storetank',
            tankInfos
        );
    }

    showTank(tankId: number) {
        return this.http.get<any[]>(
            environment.apiUrl + '/tank/showtank/' + tankId
        );
    }

    updateTank(tankId: number, tankInfos: any) {
        return this.http.post<any[]>(
            environment.apiUrl + '/tank/updatetank/' + tankId,
            tankInfos
        );
    }

    deleteTank(tankId: number) {
        return this.http.delete<any[]>(
            environment.apiUrl + '/tank/destroytank/' + tankId
        );
    }
}
