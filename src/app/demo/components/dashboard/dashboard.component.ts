import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Compagnie } from '../../models/model';
import { Router } from '@angular/router';
import { CompagniesService } from '../../service/compagnies.service';


@Component({
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
    allCompagnies: Compagnie[]= [];
    nbcomp:number



    constructor(private compagniesService: CompagniesService,private router:Router) {}

    ngOnInit(): void {
        this.compagniesService.getAllCompany().subscribe((data) =>{
                this.allCompagnies = data['data'];
        })
        this.nbcomp = this.allCompagnies.length
        // console.log(this.allCompagnies)
        // console.log(this.nbcomp)


    }
}
