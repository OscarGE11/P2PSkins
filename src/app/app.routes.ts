import { Routes } from '@angular/router';
import { TradesComponent } from './trades/trades.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
  { path: 'trades', component: TradesComponent },
  /* { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent }, */
  { path: '', redirectTo: '/trades', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
