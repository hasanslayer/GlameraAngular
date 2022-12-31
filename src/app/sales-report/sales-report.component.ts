import { Component, OnInit } from '@angular/core';
import { ISaleReport } from '../models/SaleReport';
import { SalesReportService } from './sales-report.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css'],
})
export class SalesReportComponent implements OnInit {
  saleReports: ISaleReport[] = [];
  constructor(private saleReportService: SalesReportService) {}

  ngOnInit(): void {
    this.getSaleReport();
  }

  getSaleReport() {
    this.saleReportService.GetSalesReport().subscribe({
      next: (saleReports: ISaleReport[]) => {
        console.log(saleReports);
        console.log("test");
        this.saleReports = saleReports;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
