import { Component } from '@angular/core';
import { Compagnie, Product } from 'src/app/demo/models/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';
import { UserService } from 'src/app/demo/service/user.service';

@Component({
    selector: 'app-user',

    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    allCompagnies: Compagnie[] = [];
    allUsers: any[] = [];
    userForm!: FormGroup;
    selectedCompany!: Compagnie;
    loading: boolean = false;
    filteredproduct!: any;
    nbstationService!: any | undefined;
    datastationService!: any;
    isLoading$: Observable<boolean>;
    items: MenuItem[] | undefined;
    globalFilterFields: any;
    menu: Menu;
    roles: any;

    constructor(
        private compagniesService: CompagniesService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.compagniesService.getAllCompany().subscribe((data) => {
            this.allCompagnies = data['data'];
        });
        this.userService.getAlluser().subscribe((data) => {
            this.allUsers = data['data'];
        });


        this.roles = this.userService.roles;

        this.userForm = this.formBuilder.group({
            first_name: [null, [Validators.required]],
            last_name: [null, [Validators.required]],
            email: [null, [Validators.required]],
            name_entreprise: [null, [Validators.required]],
            role_user: [null, [Validators.required]],
            name_ss: [null, [Validators.required]],
        });

        this.items = [
            {
                label: 'Role',

                command: () => {
                    this.onMenuSelect('Filter1');
                    this.menu.hide();
                },
            },
            {
                label: 'Station service',

                command: () => {
                    this.onMenuSelect('Filter2');
                    this.menu.hide();
                },
            },
            {
                label: 'Entreprise',
                command: () => {
                    this.onMenuSelect('Filter4');
                    this.menu.hide();
                },
            },
        ];

        this.globalFilterFields = 'first_name';
    }


    show(){


      this.datastationService= this.userForm.value.name_entreprise.servicestations
    }

    onSubmitForm() {
        this.loading = true;
        console.log(this.userForm.value)

        this.userService.storeuser(this.userForm.value).subscribe(
            (response) => {
                this.userForm.reset();
                this.loading = false;
                this.router.navigate([], {
                    relativeTo: this.route,
                    skipLocationChange: true
                  });

            },
            (error) => {
                console.error(
                    "Erreur lors de l'enregistrement de l utilisateur",
                    error
                );
            }
        );
    }



    desactiveuser(productId: number) {
        // this.productService.deleteProduct(productId).subscribe(
        //     (response) => {
        //         this.router.navigate([], {
        //             relativeTo: this.route,
        //             skipLocationChange: true
        //           });
        //     },
        //     (error) => {
        //         console.error(
        //             'Erreur lors de la suppression du produit',
        //             error
        //         );
        //     }
        // );
    }

    onMenuSelect(label: any) {
        switch (label) {
            case 'Filter1':
                this.globalFilterFields = 'jauge.name';
                break;
            case 'Filter2':
                this.globalFilterFields =
                    'stationProduct.name_stationservice.name';
                break;
            case 'Filter3':
                this.globalFilterFields = 'stationProduct.nameproduct.name';
                break;
            case 'Filter4':
                this.globalFilterFields = 'stationProduct.name_entreprise.name';
                break;
            default:
                break;
        }
    }


}
