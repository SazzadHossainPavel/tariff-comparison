import { Component, OnInit } from '@angular/core';
import { TariffApiService } from '../core/services/tariff-api.service';
import { HotToastService } from '@ngneat/hot-toast';
import {
  TariffResponse,
  TariffResult,
} from '../core/models/tariff-result.model';
declare var window: any;

@Component({
  selector: 'app-tariff-calculator',
  templateUrl: './tariff-calculator.component.html',
  styleUrls: ['./tariff-calculator.component.css'],
})
export class TariffCalculatorComponent implements OnInit {
  results: TariffResult[] = [];
  formModal: any;

  constructor(
    private tariffApiService: TariffApiService,
    private toast: HotToastService
  ) {}

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
      next: (data: TariffResponse) => {
        if (data.success) {
          this.results = data?.bills ? data.bills : [];
        } else {
          this.toast.error(data?.message);
        }
      },
      error: (error) => {
        console.error('Error getting costs:', error);
      },
    });
  }

  calculateCost(consumption: number) {
    this.tariffApiService.calculateCost(consumption).subscribe({
      next: (data: TariffResponse) => {
        if (data.success) {
          this.toast.success(data?.message);

          this.getTariffResults();
        } else {
          this.toast.error(data?.message);
        }
      },
      error: (error) => {
        if (error?.error?.errors) {
          let errorMessage = '';
          for (const [key, value] of Object.entries(error?.error?.errors)) {
            errorMessage += `${key} ${value}`;
          }
          this.toast.error(errorMessage);
        } else {
          this.toast.error('Something went wrong. Please try again later');
        }
      },
    });
  }

  closeModalHandler(isClose: boolean) {
    if (isClose) {
      this.closeModal();
    }
  }
}
