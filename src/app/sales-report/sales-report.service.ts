import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISaleReport } from '../models/SaleReport';

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {
  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  GetSalesReport() : Observable<ISaleReport[]>{
    return this.http.get<ISaleReport[]>(this.baseUrl+'GetSalesReport');
  }

}
