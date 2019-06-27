import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { endProjectI } from 'src/app/models/endproject/project';
import { JwtResponseEndProjectI } from 'src/app/models/endproject/jwt-response-endp';
import { tap } from 'rxjs/operators';

@Injectable()

export class EndprojectServices { // Finalizar proyecto con todos los datos "actualizar..."

    AUTH_SERVER: string = 'http://178.128.74.193/DSW-Back/api/v1';
    authSubject = new BehaviorSubject(false);
    token: string;

    constructor(private httpClient: HttpClient, private router: Router) {
        
    }

    endProject(project: endProjectI): Observable<JwtResponseEndProjectI>{
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + this.getToken()
            })
        };

        return this.httpClient.put<JwtResponseEndProjectI>(`${this.AUTH_SERVER}/proyects/developer`, project, httpOptions ).pipe(tap(
            (res: JwtResponseEndProjectI) => {
                console.log(res.message);
                if (res) {
                    console.log('Actualizado.');
                }
            })
        );

    }

    private getToken(){
        this.token = localStorage.getItem("ACCESS_TOKEN");
        return this.token;
    }

}