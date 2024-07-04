import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/env';

@Injectable()
export class TankService {
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

    showRecord(tankId: number) {
        return this.http.get<any[]>(
            environment.apiUrl + '/tank/showrecord/' + tankId
        );
    }

    saveRecord(idRecord: number, RecordInfos: any) {
        return this.http.post<any[]>(
            environment.apiUrl + '/tank/saverecord/' + idRecord,
            RecordInfos
        );
    }

    deleteTank(tankId: number) {
        return this.http.delete<any[]>(
            environment.apiUrl + '/tank/destroytank/' + tankId
        );
    }

    deleteRecord(idRecord: number) {
        return this.http.delete<any[]>(
            environment.apiUrl + '/tank/destroyrecord/' + idRecord
        );
    }
    deleteRecords(recordids: any[]) {
        return this.http.post<any[]>(
            environment.apiUrl + '/tank/destroyrecords',
            recordids
        );
    }
}
