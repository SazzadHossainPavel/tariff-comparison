import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tariff-calculator',
    loadChildren: () =>
      import('./tariff-calculator/tariff-calculator.module').then(
        (m) => m.TariffCalculatorModule
      ),
  },
  {
    path: '',
    redirectTo: '/tariff-calculator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
