import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    isLoading$ = this.loadingSubject.asObservable(); // I changed the property name to match the convention of starting with "is"

    setLoading(isLoading: boolean) {
        this.loadingSubject.next(isLoading);
    }
}
