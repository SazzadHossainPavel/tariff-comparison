import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { tariffProvider } from './core/models/tariff-provider.model';

export const defaultTariffProviderConfig: tariffProvider = {
  apiUrl: 'http://localhost:3000/api/electricity',
};

export const TARIFF_PROVIDER = new InjectionToken<tariffProvider>(
  'tariffProvider'
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HotToastModule.forRoot(),
  ],
  providers: [
    { provide: TARIFF_PROVIDER, useValue: defaultTariffProviderConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
