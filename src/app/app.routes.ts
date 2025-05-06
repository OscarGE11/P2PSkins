import { Routes } from '@angular/router';
import { TradesComponent } from './trades/trades.component';
export const routes: Routes = [
  { path: 'trades', component: TradesComponent },
  /* { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent }, */
  { path: '', redirectTo: '/trades', pathMatch: 'full' },
  /* { path: '**', component: PaginaNoEncontradaComponent }  */
];
