import { Observable } from "rxjs";
import { AppHttpApiService } from "../../common-utils/httpApi.service";
import { Injectable } from "@angular/core";

@Injectable()
export class Test1ApiService {
    constructor(private appService: AppHttpApiService){

    }

    getProducts():Observable<any>{
      return  this.appService.getData("products")
    }
}