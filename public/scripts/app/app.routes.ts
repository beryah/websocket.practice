import { Route } from "@angular/router";

import { LoginComponent } from './components/login';
import { LobbyComponent } from './components/lobby';

export class AppRoute {
    public static routes: Route[] = [
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
        },
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'lobby',
            component: LobbyComponent,
        },
    ];
}
