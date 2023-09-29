import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffCalculatorRoutingModule } from './tariff-calculator-routing.module';
import { TariffCalculatorComponent } from './tariff-calculator.component';
import { ConsumptionInputComponent } from './consumption-input/consumption-input.component';
import { ConsumptionResultsComponent } from './consumption-results/consumption-results.component';
import { FormsModule } from '@angular/forms';
import { TariffApiService } from '../core/services/tariff-api.service';

@NgModule({
  declarations: [
    TariffCalculatorComponent,
    ConsumptionInputComponent,
    ConsumptionResultsComponent,
  ],
  imports: [TariffCalculatorRoutingModule, CommonModule, FormsModule],
  providers: [TariffApiService],
})
export class TariffCalculatorModule {}
