import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppRoute } from './app.routes';
import { LoginComponent } from './components/login';
import { LobbyComponent } from './components/lobby';

@Component({
    selector: 'app-comp',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent { }

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LobbyComponent,
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(AppRoute.routes),
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }