import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
    private pusher: Pusher;
    channel
    private inactiveTanksSubject = new BehaviorSubject<any[]>([]);
    getInactiveTanks$: Observable<any[]> = this.inactiveTanksSubject.asObservable();

    constructor() {
      this.pusher = new Pusher(environment.pusher.key, {
        cluster: environment.pusher.cluster,
      });
      this.channel = this.pusher.subscribe('alertsChannel');
      this.channel.bind('alertsevent', (data: any) => {
        this.inactiveTanksSubject.next(this.inactiveTanksSubject.getValue().concat(data));
      });
    }
  }

