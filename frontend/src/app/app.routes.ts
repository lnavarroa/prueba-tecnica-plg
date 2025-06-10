import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';

export const routes: Routes = [
  { path: '', component: ClientesComponent }, // Página principal
  { path: 'clientes', component: ClientesComponent }, // Ruta específica
];
