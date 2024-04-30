import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from 'src/app/demo/models/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
})
export class ProductsComponent {
    allProducts: Product[] = [];
    productForm!: FormGroup;
    selectedProduct!: Product;
    loading: boolean = false;
    filteredproduct!: any;
    nbstationService!: any | undefined;
    datastationService!: any;

    constructor(
        private productService: ProductService,
        private formBuilder: FormBuilder,
        private router:Router
    ) {}

    ngOnInit(): void {
        this.productService.getAllproduct().subscribe((data) => {
            this.allProducts = data['data'];
        });

        this.productForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            price: [null, [Validators.required]],
        });
    }

    onSubmitForm() {
        this.loading = true;
        this.productService.storeProduct(this.productForm.value).subscribe(
            (response) => {
                this.productForm.reset();

                window.location.reload();
            },
            (error) => {
                console.error(
                    "Erreur lors de l'enregistrement du produit",
                    error
                );
            }
        );
    }

    onUpdateForm(productId: number) {
        this.loading = true;
        this.productService
            .updateProduct(productId, this.productForm.value)
            .subscribe(
                (response) => {
                    this.productForm.reset();
                    window.location.reload();
                },
                (error) => {
                    console.error(
                        'Erreur lors de la mise à jour du produit',
                        error
                    );
                }
            );
    }

    deleteProduct(productId: number) {
        this.productService.deleteProduct(productId).subscribe(
            (response) => {
                window.location.reload();
            },
            (error) => {
                console.error(
                    'Erreur lors de la suppression du produit',
                    error
                );
            }
        );
    }

    showselectedProduct() {
        this.productService
            .showProduct(this.selectedProduct?.id)
            .subscribe((data) => {
                this.filteredproduct = data['data'];
                if (data['datasupp']) {
                    this.nbstationService = data['datasupp'];

                    this.datastationService =
                        this.nbstationService?.servicestation;
                }

                console.log(this.datastationService);
            });
    }

    showDetails(ssId){
        this.router.navigateByUrl(`service_station/showservice_station/${ssId}`);
    }
}
