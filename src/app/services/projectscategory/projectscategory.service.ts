import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtResponseAllI } from 'src/app/models/allprojects/jwt-response-all';
import { tap } from 'rxjs/operators';

@Injectable()

export class ProjectscategoryServices {

    constructor(private httpClient: HttpClient, private route: Router) {

    }

    AUTH_SERVER: string = 'http://178.128.74.193/DSW-Back/api/v1';
    authSubject = new BehaviorSubject(false);

    // Variables para guardar la data
    token: string;
    

    // Obtener el token actual de la sesión en el localStorage
    private getToken(){
        this.token = localStorage.getItem("ACCESS_TOKEN");
        return this.token;
    }

    getProjectCategory(category:string): Observable<JwtResponseAllI>{

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        };

        return this.httpClient.get<JwtResponseAllI>(`${this.AUTH_SERVER}/proyects/${category}`, httpOptions).pipe(tap(
            (res: JwtResponseAllI) => {
                console.log(res.message);
                console.log(this.getToken());
                if (res) {
                    console.log('Obtenidos los proyectos.');
                }
            })
        );


    }



}