import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';
import { Compagnie } from 'src/app/demo/models/model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
    selector: 'app-compagnies-list',
    templateUrl: './compagnies-list.component.html',
    styleUrl: './compagnies-list.component.scss',
    providers: [MessageService, ConfirmationService]
})
export class CompagniesListComponent {

    allCompagnies: Compagnie[]= [];

    selectedCompanies:Compagnie[]= [];

    constructor(private compagniesService: CompagniesService,private confirmationService: ConfirmationService, private messageService: MessageService,private router:Router) {}

    ngOnInit(): void {
        this.compagniesService.getAllCompany().subscribe((data) =>{
                this.allCompagnies = data['data'];
        })

    }

    Details(companyId: any) {
        this.router.navigateByUrl(`compagnies/addcompagnie/${companyId}`);
    }


    deleteSelectedCompanies() {
        const selectedCompanyId: any = this.selectedCompanies.map(company => company.id);
        console.log(selectedCompanyId)
        this.confirmationService.confirm({
            message: 'Voulez-vous vraiment supprimer l\' entreprise selectionnée.',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'pi pi-check mr-1',
            rejectIcon: 'pi pi-times mr-1',
            rejectButtonStyleClass: 'p-button-danger p-button-sm',
            acceptButtonStyleClass: 'p-button-outlined p-button-sm',
            accept: () => {
                this.compagniesService.deleteCompany(selectedCompanyId).subscribe(
                    (response) => {
                        window.location.reload();
                        console.error('suppression de la company', response);
                    },
                    (error) => {
                      console.error('Erreur lors de la suppression de la company', error);
                    }
                  );

            },
            reject: () => {

            }
        });
    }
}
