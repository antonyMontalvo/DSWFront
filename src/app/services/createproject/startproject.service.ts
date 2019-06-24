import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectI } from 'src/app/models/createproject/project';
import { JwtResponseProject } from 'src/app/models/createproject/jwt-response-project';
import { tap } from 'rxjs/operators';

@Injectable()

export class StartprojectServices {

    AUTH_SERVER: string = 'http://178.128.74.193/DSW-Back/api/v1';
    authSubject = new BehaviorSubject(false);
    token: string;


    constructor(private httpClient: HttpClient, private router: Router) {
        
    }

    createProject(user: ProjectI): Observable<JwtResponseProject> {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + this.getToken()
            })
        };

        
        return this.httpClient.post<JwtResponseProject>(`${this.AUTH_SERVER}/proyects`,
            user, httpOptions).pipe(tap(
                (res: JwtResponseProject) => {
                    console.log(this.getToken());
                    if (res) {
                        console.log('Ingresado correctamente.');
                    }
                })
            );
            
    }

    private getToken(){
        this.token = localStorage.getItem("ACCESS_TOKEN");
        return this.token;
    }



}