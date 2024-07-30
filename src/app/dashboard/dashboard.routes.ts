import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';

export const dashboardRotes: Routes = [
  { path: '', component: EstadisticaComponent },
  { path: 'ingreso-degreso', component: IngresoEgresoComponent },
  { path: 'detalle', component: DetalleComponent },

];
