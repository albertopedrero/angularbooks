import { Routes } from '@angular/router';
import { PrincipalComponent } from './dominios/libros/paginas/principal/principal.component';
import { LeyendoComponent } from './dominios/libros/paginas/leyendo/leyendo.component';
import { LeidoComponent } from './dominios/libros/paginas/leido/leido.component';
import { QuieroComponent } from './dominios/libros/paginas/quiero/quiero.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'leyendo', component: LeyendoComponent},
  { path: 'leido', component: LeidoComponent},
  { path: 'quiero', component: QuieroComponent},
  { path: '**', component: PrincipalComponent}
];
