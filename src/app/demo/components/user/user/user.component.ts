import { Component } from '@angular/core';
import { Compagnie, Product, User } from 'src/app/demo/models/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';
import { UserService } from 'src/app/demo/service/user.service';
import { LoadingService } from 'src/app/demo/service/loading.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent {
    allCompagnies: Compagnie[] = [];
    allUsers: any[] = [];
    finalUsers: any[] = [];
    userForm!: FormGroup;
    selectedCompany!: Compagnie;
    loading: boolean = false;
    selectedUser!: User;
    nbstationService!: any | undefined;
    datastationService!: any;
    isLoading$: Observable<boolean>;
    items: MenuItem[] | undefined;
    globalFilterFields: any;
    menu: Menu;
    roles: any;
    visible: boolean = false;

    constructor(
        private compagniesService: CompagniesService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private router: Router,
        private loadingService: LoadingService
    ) {
        this.isLoading$ = this.loadingService.isLoading$;
    }

    ngOnInit(): void {
        this.compagniesService.getAllCompany().subscribe((data) => {
            this.allCompagnies = data['data'];
        });
        this.userService.getAlluser().subscribe((data) => {
            this.allUsers = data['data'];
        });

        console.log(this.allUsers);
        this.roles = this.userService.roles;

        this.userForm = this.formBuilder.group({
            first_name: [null, [Validators.required]],
            last_name: [null, [Validators.required]],
            email: [null, [Validators.required]],
            name_entreprise: [null, [Validators.required]],
            role_user: [null, [Validators.required]],
            name_ss: [null],
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
                    this.onMenuSelect('Filter3');
                    this.menu.hide();
                },
            },
        ];

        this.globalFilterFields = 'name';
    }

    show() {
        this.datastationService =
            this.userForm.value.name_entreprise.servicestations;
    }

    hide_ss() {
        const role_user = this.userForm.value.role_user;
        console.log(this.userForm.value.role_user.code);
        if (role_user.code == 'AD') {
            this.visible = true;
        } else {
            this.visible = false;
        }
    }

    onSubmitForm() {
        this.loading = true;
        this.loadingService.setLoading(true);

        this.userService.storeuser(this.userForm.value).subscribe(
            (response) => {
                this.userForm.reset();
                this.ngOnInit();
                this.loading = false;
                this.loadingService.setLoading(false);
            },
            (error) => {
                console.error(
                    "Erreur lors de l'enregistrement de l utilisateur",
                    error
                );
            }
        );
    }

    desactiveuser() {
        this.loading = true;
        this.loadingService.setLoading(true);
        this.userService.desactiveuser(this.selectedUser.id).subscribe(
            (response) => {
                this.ngOnInit();
                this.loading = false;
                this.loadingService.setLoading(false);
            },
            (error) => {
                console.error(
                    'Erreur lors de la suppression du produit',
                    error
                );
            }
        );
    }

    onMenuSelect(label: any) {
        switch (label) {
            case 'Filter1':
                this.globalFilterFields = 'name';
                console.log(this.selectedUser.email);
                break;
            case 'Filter2':
                this.globalFilterFields = 'roles[0]?.service_stations[0]';
                break;
            case 'Filter3':
                this.globalFilterFields = 'roles[0]?.company';
                break;
            default:
                break;
        }
    }
}
