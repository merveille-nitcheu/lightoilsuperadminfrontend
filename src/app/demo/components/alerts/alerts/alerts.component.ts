import { Component } from '@angular/core';
import { AlertService } from '../../../service/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {

    private notificationSound: HTMLAudioElement;

    getInactiveTanks:any

    constructor( private AlertService: AlertService,) {
        this.notificationSound = new Audio('assets/sounds/Cavalerie.mp3');
      }


      ngOnInit(): void {

        this.AlertService.getInactiveTanks().subscribe((data) => {
            this.getInactiveTanks = data['inactiveTanks'];
            this.notificationSound.play().catch((error) => {
                console.error('Erreur lors de la lecture du son:', error);
              });
        });

    }
}
