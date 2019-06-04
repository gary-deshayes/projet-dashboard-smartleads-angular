import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformanceMapComponent } from './performance-map/performance-map.component';
import { TopSalespersonComponent } from './top-salesperson/top-salesperson.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { OneStatisticComponent } from './one-statistic/one-statistic.component';
import { PerfOperationComponent } from './perf-operation/perf-operation.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { QualityCrmComponent } from './quality-crm/quality-crm.component';
import { ConnectionComponent } from './connection/connection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PerformanceMapComponent,
    TopSalespersonComponent,
    StatisticsComponent,
    OneStatisticComponent,
    PerfOperationComponent,
    MonitoringComponent,
    QualityCrmComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
