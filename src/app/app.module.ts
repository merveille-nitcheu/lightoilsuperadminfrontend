import { NgModule } from '@angular/core';
import {
    HashLocationStrategy,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProductService } from './demo/service/product.service';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TankService } from './demo/service/tank.service';
import { ServicesStationsService } from './demo/service/servicesStations.service';
import { CompagniesService } from './demo/service/compagnies.service';
import { JaugeService } from './demo/service/jauge.service';
import { ConfirmationService } from 'primeng/api';
import { InterceptorService } from './demo/interceptors/interceptor.service';





@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, AppLayoutModule,HttpClientModule,ReactiveFormsModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        ProductService,
        CookieService,
        TankService,
        ServicesStationsService,
        CompagniesService,
        JaugeService,
        ConfirmationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass:InterceptorService ,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
