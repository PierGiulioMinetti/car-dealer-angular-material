import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'detail-page/:id', loadChildren: () => import('../app/core/features/car-detail-page/car-detail-page.module').then(m => m.CarDetailPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
