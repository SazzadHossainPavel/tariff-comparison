import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-consumption-results',
  templateUrl: './consumption-results.component.html',
  styleUrls: ['./consumption-results.component.css'],
})
export class ConsumptionResultsComponent {
  @Input() results: any[] = [];
}
