import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {

    private notificationSound: HTMLAudioElement;

    constructor() {
        this.notificationSound = new Audio('assets/sounds/Cavalerie.mp3');
      }


      ngOnInit(): void {
        this.notificationSound.play().catch((error) => {
            console.error('Erreur lors de la lecture du son:', error);
          });
    }
}
