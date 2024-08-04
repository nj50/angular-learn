import { Observable } from "rxjs";
import { AppHttpApiService } from "../../common-utils/httpApi.service";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class Test2ApiService {
    constructor(private appService: AppHttpApiService){

    }

    getUsers():Observable<any>{
      let cacheHead = new HttpHeaders();
      cacheHead = cacheHead.set('CACHE', '2e23rf43t43t34t4355y45')


      return  this.appService.getData("users", cacheHead)
    }
}