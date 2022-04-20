import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FrutasModule } from './frutas/frutas.module';
import { FrutaDescComponent } from './fruta/fruta-desc/fruta-desc.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  declarations: [AppComponent, DashboardComponent, FrutaDescComponent],
  imports: [
    BrowserModule,
    FrutasModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
