import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { JwtResponseDataProjectI } from 'src/app/models/dataproject/jwt-responde-datap';

@Injectable()

export class DataprojectServices {

    AUTH_SERVER: string = 'http://178.128.74.193/DSW-Back/api/v1';
    authSubject = new BehaviorSubject(false);

    constructor(private httpClient: HttpClient, private route: Router) {

    }

    getAllDataproject(_id:string): Observable<JwtResponseDataProjectI>{

        return this.httpClient.get<JwtResponseDataProjectI>(`${this.AUTH_SERVER}/proyect/${_id}`).pipe(tap(
            (res: JwtResponseDataProjectI) => {
               
                if (res) {
                    console.log('Obtenido.');
                }
            })
        );

    }


}