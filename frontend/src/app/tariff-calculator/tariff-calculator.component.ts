import { Component, OnInit } from '@angular/core';
import { TariffApiService } from '../services/tariff-api.service';
declare var window: any;

@Component({
  selector: 'app-tariff-calculator',
  templateUrl: './tariff-calculator.component.html',
  styleUrls: ['./tariff-calculator.component.css'],
})
export class TariffCalculatorComponent implements OnInit {
  results: any[] = [];
  formModal: any;

  constructor(private tariffApiService: TariffApiService) {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('consumptionModal')
    );

    this.getTariffResults();
  }

  openModal() {
    this.formModal.show();
  }

  closeModal() {
    this.formModal.hide();
  }

  getTariffResults() {
    this.tariffApiService.getTariffResults().subscribe({
      next: (data: any) => {
        this.results = data.bills;
      },
      error: (error) => {
        console.error('Error getting costs:', error);
      },
    });
  }

  calculateCost(consumption: number) {
    this.tariffApiService.calculateCost(consumption).subscribe({
      next: (data: any) => {
        if (data.success) {
          this.getTariffResults();
        }
      },
      error: (error) => {
        console.error('Error calculating costs:', error);
      },
    });
  }

  closeModalHandler(isClose: boolean) {
    if (isClose) {
      this.closeModal();
    }
  }
}
