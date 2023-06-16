import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class AuthInteerceptorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token=sessionStorage.getItem('token');
    console.log(token);

    if(token){
      request=request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`,
        }
      })
    }

    return next.handle(request);
  }
}
