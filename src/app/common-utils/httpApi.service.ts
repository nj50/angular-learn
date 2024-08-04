import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppHttpApiService {
    private endPoint = ''; // Approch 1 to set BASE URL  :Not a good approch
    private customReqOptions: HttpHeaders = new HttpHeaders();

    constructor( 
        private httpClient: HttpClient,
        @Inject('BASE_API_URL') private baseUrl: string) {
            this.endPoint = baseUrl;
    }

    private getHeaders( headers?: HttpHeaders): HttpHeaders {
        if(!headers){
            headers = new HttpHeaders();
        }
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    public getData<T>(url: string, headers?: HttpHeaders): Observable<T> | Observable<any> {
        this.customReqOptions = this.getHeaders(headers);
        return this.httpClient.get(`${this.endPoint}${url}`, { headers: this.customReqOptions});
    }

    public postData<T>(url: string, payload: any, headers?: HttpHeaders): Observable<T> | Observable<any> {
        this.customReqOptions = this.getHeaders(headers);
        return this.httpClient.post(`${this.endPoint}${url}`, payload , { headers: this.customReqOptions});
    }

    public putData<T>(url: string, payload: any, headers?: HttpHeaders): Observable<T> | Observable<any> {
        this.customReqOptions = this.getHeaders(headers);
        return this.httpClient.put(`${this.endPoint}${url}`, payload , { headers: this.customReqOptions});
    }

    public deleteData<T>(url: string, headers?: HttpHeaders): Observable<T> | Observable<any> {
        this.customReqOptions = this.getHeaders(headers);
        return this.httpClient.delete(`${this.endPoint}${url}`, { headers: this.customReqOptions});
    }
}