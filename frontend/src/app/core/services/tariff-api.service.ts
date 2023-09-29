import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TARIFF_PROVIDER } from 'src/app/app.module';
import { tariffProvider } from '../models/tariff-provider.model';
import {
  TariffResponse,
  TariffResult,
} from 'src/app/core/models/tariff-result.model';

@Injectable()
export class TariffApiService {
  constructor(
    @Inject(TARIFF_PROVIDER) private tariffProvider: tariffProvider,
    private http: HttpClient
  ) {}

  calculateCost(consumption: number): Observable<TariffResponse> {
    return this.http.post<TariffResponse>(
      this.tariffProvider.apiUrl + '/calculate',
      {
        consumption,
      }
    );
  }

  getTariffResults(): Observable<TariffResponse> {
    return this.http.get<TariffResponse>(this.tariffProvider.apiUrl);
  }
}
