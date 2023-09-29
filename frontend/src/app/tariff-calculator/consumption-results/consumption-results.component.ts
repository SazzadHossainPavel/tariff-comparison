import { Component, Input } from '@angular/core';
import { TariffResult } from '../../core/models/tariff-result.model';

@Component({
  selector: 'app-consumption-results',
  templateUrl: './consumption-results.component.html',
  styleUrls: ['./consumption-results.component.css'],
})
export class ConsumptionResultsComponent {
  @Input() results: TariffResult[] = [];
}
