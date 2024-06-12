import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = this.cookieService.get('User');
    let authRequest = request;

    if (user != null && user.length > 0) {
      const userConnected = JSON.parse(user);
      authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userConnected.id}`
        }
      });
    }

    return next.handle(authRequest);
  }
}
