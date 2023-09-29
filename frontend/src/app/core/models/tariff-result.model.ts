export interface TariffResult {
  name: string;
  annualCost: number;
}

export interface TariffResponse {
  success?: boolean;
  bills?: TariffResult[];
  message?: string;
}
