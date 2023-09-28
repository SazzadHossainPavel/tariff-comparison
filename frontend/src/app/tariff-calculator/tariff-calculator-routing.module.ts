import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TariffCalculatorComponent } from './tariff-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: TariffCalculatorComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TariffCalculatorRoutingModule {}
