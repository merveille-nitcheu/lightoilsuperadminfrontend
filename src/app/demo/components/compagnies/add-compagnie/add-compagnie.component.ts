import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';
import { Compagnie } from 'src/app/demo/models/model';
import { ActivatedRoute, Router } from '@angular/router';
import { format, parse } from 'date-fns';
import { formatDate } from '@angular/common';
import { LoadingService } from 'src/app/demo/service/loading.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-add-compagnie',
    templateUrl: './add-compagnie.component.html',
    styleUrl: './add-compagnie.component.scss',
})
export class AddCompagnieComponent implements OnInit {
    companyForm!: FormGroup;
    companyId: number;
    filteredcompany: Compagnie;
    financialYear: any;
    start_date: Date;
    expected_end_date: Date;
    loading = false;
    uploadedImageUrl: string | null = null;
    showUploadText = true;
    datetest: Date;
    isLoading$: Observable<boolean>;

    constructor(
        private compagniesService: CompagniesService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private loadingService: LoadingService
    ) {
        this.isLoading$ = this.loadingService.isLoading$;
    }

    ngOnInit(): void {
        this.companyForm = this.formBuilder.group({
            address: [null, [Validators.required]],
            name: [null, [Validators.required]],
            phone: [null, [Validators.required]],
            email: [null],
            logo: [null],
            start_date: [null, [Validators.required]],
            expected_end_date: [null, [Validators.required]],
            website: [null],
        });

        this.companyId = this.route.snapshot.params['companyId'];
        if (this.companyId) {
            this.compagniesService
                .showCompany(this.companyId)
                .subscribe((data) => {
                    this.filteredcompany = data['data'];
                    this.financialYear = data['financialYear'];
                    console.log(this.financialYear);

                    this.start_date = parse(
                        format(this.financialYear.start_date, 'dd/MM/yy'),
                        'dd/MM/yy',
                        new Date()
                    );

                    this.expected_end_date = parse(
                        format(
                            this.financialYear.expected_end_date,
                            'dd/MM/yy'
                        ),
                        'dd/MM/yy',
                        new Date()
                    );
                });
        }
    }

    handleFileUpload(files: File[]): void {
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = (event: any) => {
                this.uploadedImageUrl = event.target.result;
                this.showUploadText = false;
            };

            reader.readAsDataURL(file);
        }
    }

    deleteImage(): void {
        this.uploadedImageUrl = null;
        this.showUploadText = true;
    }

    onSubmitForm() {
        this.loading = true;
        this.loadingService.setLoading(true);
        this.compagniesService.storeCompany(this.companyForm.value).subscribe(
            (response) => {
                this.companyForm.reset();
                this.router.navigate(['compagnies', 'compagnielist'], {
                    replaceUrl: true,
                });
                this.loadingService.setLoading(false);
            },
            (error) => {
                console.error(
                    "Erreur lors de l'enregistrement de l'entreprise",
                    error
                );
            }
        );
    }

    onUpdateForm(companyId: number) {
        this.loading = true;
        this.loadingService.setLoading(true);
        this.compagniesService
            .updateCompany(companyId, this.companyForm.value)
            .subscribe(
                (response) => {
                    this.companyForm.reset();
                    this.router.navigate(['compagnies', 'compagnielist'], {
                        replaceUrl: true,
                    });
                    this.loadingService.setLoading(false);
                },
                (error) => {
                    console.error(
                        'Erreur lors de la mise à jour du produit',
                        error
                    );
                }
            );
    }

    showDetails(ssId) {
        this.router.navigate(['service_station', 'showservice_station', ssId], {
            replaceUrl: true,
        });
    }
}
