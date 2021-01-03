import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { routesUser } from './components/usuario/rutas-usuario';
import { UsuarioComponent } from './components/usuario/usuario.component';

const MISRUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id', component: UsuarioComponent,
        children: routesUser
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APPRutasRigo = RouterModule.forRoot(MISRUTAS);

/* @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) */
// export class FeatureRoutingModule {}


