import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from "@angular/router";

@Component({
    templateUrl: '../../../views/login.html',
})
export class LoginComponent {
    name: string = '';
    password: string = '';

    constructor(private http: Http, private router: Router) {
    }

    submit() {
        if (!this.name || !this.password) {
            window.alert('Invalid name or password');
            return;
        }

        this.http.post('/login', { name: this.name, password: this.password }).subscribe(
            (res: Response) => {
                let result = res.json();

                if (result.isSuccess) 
                    this.router.navigateByUrl(`/lobby?name=${this.name}`);
                else
                    window.alert('Incorrect password');
            });
    }
}