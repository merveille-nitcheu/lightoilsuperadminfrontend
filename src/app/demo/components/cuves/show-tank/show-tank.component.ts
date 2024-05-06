import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tank } from 'src/app/demo/models/model';
import { TankService } from 'src/app/demo/service/tank.service';

@Component({
  selector: 'app-show-tank',
  templateUrl: './show-tank.component.html',
  styleUrl: './show-tank.component.scss'
})
export class ShowTankComponent {

    tank: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tankService:TankService

    ) {}

    ngOnInit(){

        let tankId = this.route.snapshot.params['tankId'];
        this.tankService.showTank(tankId).subscribe((data) => {
            this.tank = data;
        });

    }


}
