import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
    templateUrl: '../../../views/lobby.html',
})
export class LobbyComponent {
    name: string = '';
    rooms: any[] = [];

    constructor(private http: Http, private router: Router, private activateRoute: ActivatedRoute) {
        this.activateRoute.params.subscribe(params => {
            if (this.router)
                this.name = this.router.routerState.snapshot.root.queryParams['name'];
        });

        // this.http.get('/room').subscribe((res: Response) => {
        //     this.rooms = res.json();
        // });

        let socket = io.connect();

        socket.on('updateRooms', function (data) {
            this.rooms = data;
        }.bind(this));
    }
}