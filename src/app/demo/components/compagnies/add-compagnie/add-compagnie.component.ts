import { Component } from '@angular/core';
import { CompagniesService } from 'src/app/demo/service/compagnies.service';

@Component({
    selector: 'app-add-compagnie',
    templateUrl: './add-compagnie.component.html',
    styleUrl: './add-compagnie.component.scss',
})
export class AddCompagnieComponent {
    constructor(private compagniesService: CompagniesService) {}

    loading = false;

    load() {
        this.loading = true;
        setTimeout(() => (this.loading = false), 1000);
    }

    uploadedImageUrl: string | null = null;
    showUploadText = true;

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
}
