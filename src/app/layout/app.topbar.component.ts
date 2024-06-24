import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];
    user:any

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,private cookieService: CookieService) { }


    ngOnInit(): void {


         this.items = [
            {
                label: 'Profil',
                icon: 'pi pi-user',
                routerLink: 'personal'
            },
            {
                label: 'Deconnexion',
                icon: 'pi pi-sign-out',
                command: () => {
                    this.disconnectUser();
                }

            },

        ];
        this.user = this.layoutService.getUserConnected();



    }

    disconnectUser(){
        console.log('222')
        this.cookieService.deleteAll();
        localStorage.clear();
        window.location.href = environment.authUrl;
        //this.router.navigateByUrl(environment.authUrl);
    }








}
