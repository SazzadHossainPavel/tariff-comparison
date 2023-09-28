import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TariffApiService {
  private apiUrl = 'http://localhost:3000/api/electricity';

  constructor(private http: HttpClient) {}

  calculateCost(consumption: number): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/calculate', { consumption });
  }

  getTariffResults(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
