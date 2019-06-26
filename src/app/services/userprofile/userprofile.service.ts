import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtResponseMyProjects } from 'src/app/models/userprojects/jwt-response-myprojects';

@Injectable()

export class UserprofileServices {

    AUTH_SERVER: string = 'http://178.128.74.193/DSW-Back/api/v1';
    authSubject = new BehaviorSubject(false);

    // Variables para guardar la data
    token: string;
    user_projects: any = [];

    constructor(private httpClient: HttpClient, private route: Router) {

    }

    /* Se manda el token con un header, y según ese token se obtienen los proyectos de usuario. 
    Fijarse la parte de Autorizathion en el postman, ahi te das cuenta de que pide token. */
    getAllProjects(): Observable<JwtResponseMyProjects> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        };

        return this.httpClient.get<JwtResponseMyProjects>(`${this.AUTH_SERVER}/proyects/all`, httpOptions).pipe(tap(
                (res: JwtResponseMyProjects) => {
                    console.log(res.message);
                    console.log(this.getToken());
                    if (res) {
                        console.log('Obtenidos los proyectos.');
                    }
                })
            );
    }

    // Obtener el token actual de la sesión en el localStorage
    private getToken(){
        this.token = localStorage.getItem("ACCESS_TOKEN");
        return this.token;
    }

    /* Todos los proyectos sin categoria */
    getAllProjectsNoCategory(): Observable<JwtResponseMyProjects> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        };

        return this.httpClient.get<JwtResponseMyProjects>(`${this.AUTH_SERVER}/proyects`, httpOptions).pipe(tap(
                (res: JwtResponseMyProjects) => {
                    console.log(res.message);
                    console.log(this.getToken());
                    if (res) {
                        console.log('Obtenidos los proyectos.');
                    }
                })
            );
    }
}