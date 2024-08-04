import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpApiService } from './common-utils/httpApi.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiCacheInterceptor } from './common-utils/http-api-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
    {
      provide: "BASE_API_URL", useValue: 'https://fakestoreapi.com/'
    },
    
    
    provideHttpClient(), 
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiCacheInterceptor,multi: true
    },
    AppHttpApiService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
