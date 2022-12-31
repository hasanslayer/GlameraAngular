import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesReportComponent } from './sales-report/sales-report.component';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
},
{
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
},
{
    path: 'main', component: SalesReportComponent,
    data: { apptitle: 'main', subtitle: 'main' }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
