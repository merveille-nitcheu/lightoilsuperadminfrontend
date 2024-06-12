import { Component } from '@angular/core';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';
import { Compagnie } from 'src/app/demo/models/model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/demo/service/loading.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-compagnies-list',
    templateUrl: './compagnies-list.component.html',
    styleUrl: './compagnies-list.component.scss',
    providers: [MessageService, ConfirmationService],
})
export class CompagniesListComponent {
    allCompagnies: Compagnie[] = [];

    selectedCompanies: Compagnie[] = [];
    isLoading$: Observable<boolean>;

    constructor(
        private compagniesService: CompagniesService,
        private confirmationService: ConfirmationService,
        private router: Router,
        private loadingService: LoadingService
    ) {
        this.isLoading$ = this.loadingService.isLoading$;
    }

    ngOnInit(): void {
        this.compagniesService.getAllCompany().subscribe((data) => {
            this.allCompagnies = data['data'];
        });
    }

    Details(companyId: any) {
        this.router.navigate(['compagnies', 'addcompagnie', companyId], {
            replaceUrl: true,
        });
    }

    parsePhone(phone: any): number {
        return parseInt(phone, 10);
    }

    deleteSelectedCompanies() {
        const selectedCompanyId: any = this.selectedCompanies.map(
            (company) => company.id
        );

        this.confirmationService.confirm({
            message:
                "Voulez-vous vraiment supprimer l'entreprise selectionnée.",
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check mr-1',
            rejectIcon: 'pi pi-times mr-1',
            rejectButtonStyleClass: 'p-button-danger p-button-sm',
            acceptButtonStyleClass: 'p-button-outlined p-button-sm',
            accept: () => {
                this.loadingService.setLoading(true);
                this.compagniesService
                    .deleteCompany(selectedCompanyId)
                    .subscribe(
                        (response) => {
                            // forcer le rafraichissement de la page
                            this.ngOnInit();
                            this.loadingService.setLoading(false);
                            console.error(
                                'suppression de la company',
                                response
                            );
                        },
                        (error) => {
                            console.error(
                                'Erreur lors de la suppression de la company',
                                error
                            );
                        }
                    );
            },
            reject: () => {},
        });
    }
}
