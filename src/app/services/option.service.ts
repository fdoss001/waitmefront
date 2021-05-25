import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from './../interfaces/request';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class OptionService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllItemOptions(companyId: number): Promise<any>{
    const url = '/admin/getAllItemOptions?companyId=' + companyId;
    return this.http.get<any>(url).toPromise();
  }

  public getItemOption(companyId: number, optionId: number): Promise<any>{
    const url = '/admin/getItemOption?companyId=' + companyId + '&optionId=' + optionId;
    return this.http.get<any>(url, HTTP_OPTIONS).toPromise().then(
      res => {
        return res.payload;
      },
      error => {
        console.log(error);
      }
    );
  }

  public createItemOption(request: Request): Promise<any>{
    const url = '/admin/createItemOption';
    return this.http.post<any>(url, request, HTTP_OPTIONS).toPromise();
  }

  public updateItemOption(request: Request): Promise<any>{
    const url = '/admin/updateItemOption';
    return this.http.post<any>(url, request, HTTP_OPTIONS).toPromise();
  }

  public copyItemOption(request: Request): Promise<any>{
    const url = '/admin/copyItemOption';
    return this.http.post<any>(url, request, HTTP_OPTIONS).toPromise();
  }

  public toggleActivateItemOption(request: Request): Promise<any>{
    const url = '/admin/toggleActivateItemOption';
    return this.http.post<any>(url, request, HTTP_OPTIONS).toPromise();
  }

}
