
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApiCacheInterceptor implements HttpInterceptor {

    // Cache to store response data
    private cache = new Map<string, HttpEvent<any>>();
   

    // Intercept method to handle all HTTP requests and responses
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.headers.has('CACHE')){
            
            if(request.headers.get('CACHE') === 'REFRESH'  ){
                this.cache.delete(request.url);
            }
            request = request.clone({ headers: request.headers.delete('CACHE') });


            const isCached = this.cache.has(request.url);
            if(!isCached){
                return next.handle(request).pipe(
                    tap((response) => {
                        if (response) {
                            this.cache.set(request.url, response);
                        }
                    })
                );
            }
            const cachedResponse:any = this.cache.get(request.url);
            return of(cachedResponse);
        } else {
            return next.handle(request)
        }
    }
       
}



