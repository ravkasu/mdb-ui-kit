import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Start");
    console.log(request.url);
    let token="123gbh2454h2k"
    // const accessToken = AuthService.getAccessToken();

    let mreq=request.clone({
      method:'POST',
      body:{product:"asdfghjkl"},
      headers:new HttpHeaders ({
        Authorization:`Bearer ${token}`
      }
      )
    })

    return next.handle(mreq)
    // .pipe(
    //   tap((e)=>{
    //     if(!(e instanceof HttpResponse))
    //     console.log(e)
    //     else
    //      throwError("NEW")
        
      // })
    // );
  }
}
