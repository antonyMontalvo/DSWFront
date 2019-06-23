import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserI } from 'src/app/models/user';
import { JwtResponseI } from 'src/app/models/jwt-response';

import { Router } from '@angular/router';
import { UserRegisterI } from 'src/app/models/user-register';


@Injectable()

export class AuthService {

    AUTH_SERVER: string = 'http://178.128.74.193/DSW-Back/api/v1';
    authSubject = new BehaviorSubject(false);
    private token: string;
    public isloggedin: boolean; // Booleano para ver si hay o no token en el localStorage.
    userData: any = {}; // Arreglo para guardar los datos del localStorage y usarlos en el profile.
    

    // Valores de lista para almacenar datos de navbar (usuario)
    private currentUserNameStore = new BehaviorSubject<string>("");
    public currentUserName$ = this.currentUserNameStore.asObservable();

    setCurrentUserName(userName: string) {
        this.currentUserNameStore.next(userName);
    }
    // ------------------ //

    constructor(private httpClient: HttpClient, private router: Router) {
        this.verifyTokenLogin();
    }


    login(user: UserI): Observable<JwtResponseI> {
        return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/signin`,
            user).pipe(tap(
                (res: JwtResponseI) => {
                    console.log(res);
                    console.log(res.message.token);

                    if(res.status == '200'){
                        //guardar token
                        this.saveToken(res.message.token);
                        this.saveUserData(res.message.userName, res.message.userEmail, res.message.userFirstName,
                            res.message.userLastName, res.message.userSurName, res.message.userPhoto);
                        /* this.setCurrentUserName(localStorage.getItem("FIRST_NAME")) se coloca
                        acá para que la data (username) se vea apenas te loguees */
                        this.setCurrentUserName(localStorage.getItem("FIRST_NAME") + " " + localStorage.getItem("LAST_NAME"));
                        this.isloggedin = true;

                    } else{
                        console.log(res.status);
                        this.isloggedin = false;
                    }
                    
                    /*
                    if (res) {
                        //guardar token
                        this.saveToken(res.message.token);
                        this.saveUserData(res.message.userName, res.message.userEmail, res.message.userFirstName,
                            res.message.userLastName, res.message.userSurName, res.message.userPhoto);
                        /* this.setCurrentUserName(localStorage.getItem("FIRST_NAME")) se coloca
                        acá para que la data (username) se vea apenas te loguees 
                        this.setCurrentUserName(localStorage.getItem("FIRST_NAME") + " " + localStorage.getItem("LAST_NAME"));
                        this.isloggedin = true;
                    }*/
                })
            );
    }


    /* Métodos para token */

    logout(): void {
        this.token = '';
        //localStorage.removeItem("ACCESS_TOKEN");
        localStorage.clear(); // Borra token y todos los datos guardados en local.
        this.isloggedin = false;
        this.router.navigate(['/']); //Para que te bote de la página al inicio.
    }

    private saveStatus(status:string): void {
        localStorage.setItem("STATUS", status);
    }

    private saveToken(token: string): void {
        localStorage.setItem("ACCESS_TOKEN", token);
        this.token = token;
    }

    private saveUserData(userName: string, userEmail: string, userFirstName: string, userLastName: string,
        userSurName: string, userPhoto: string) {

        //Datos de usuario
        localStorage.setItem("USER", userName);
        localStorage.setItem("EMAIL", userEmail);
        localStorage.setItem("FIRST_NAME", userFirstName);
        localStorage.setItem("LAST_NAME", userLastName);
        localStorage.setItem("SUR_NAME", userSurName);
        localStorage.setItem("PHOTO_URL", userPhoto);

    }

    public getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem("ACCESS_TOKEN");
        }
        return this.token;
    }


    verifyTokenLogin(): void {
        /* Cada vez que el nav carga el servicio verificará si hay un token, para validar la data.
        Se almacena en una lista (currentUserNameStore) la data para poder utilizarla en todas las vistas.
        */
        if (localStorage.getItem("ACCESS_TOKEN") == 'undefined' || localStorage.getItem("ACCESS_TOKEN") == null) {
            this.isloggedin = false;
        } else {
            console.log('Si hay token.');
            /* Si hay un token, entonces se hace un set de la data en la lista del token actual, para
            que no se pierda. */
            this.setCurrentUserName(localStorage.getItem("FIRST_NAME") + " " + localStorage.getItem("LAST_NAME"));
            this.isloggedin = true;
        }
    }


    verifyTokenPage(): boolean {
        // Verificar si hay token en cada página - booleano
        if (localStorage.getItem("ACCESS_TOKEN") == 'undefined' || localStorage.getItem("ACCESS_TOKEN") == null) {
            console.log('No hay token alv.');
            return false;
        } else {
            console.log('Si hay token.');
            return true;
        }
    }
    /* ----------------------- */

    //Registro
    register(user: UserRegisterI): Observable<JwtResponseI> {
        return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/signup`,
            user).pipe(tap(
                (res: JwtResponseI) => {
                    console.log(res);
                    console.log(res.message.token);
                    if (res) {
                        //guardar token
                        this.saveToken(res.message.token);
                        this.saveUserData(res.message.userName, res.message.userEmail, res.message.userFirstName,
                            res.message.userLastName, res.message.userSurName, res.message.userPhoto);
                        /* this.setCurrentUserName(localStorage.getItem("FIRST_NAME")) se coloca
                        acá para que la data (username) se vea apenas te loguees */
                        this.setCurrentUserName(localStorage.getItem("FIRST_NAME") + " " + localStorage.getItem("LAST_NAME"));
                        this.isloggedin = true;
                    }
                })
            );
    }


    public getDataUser(){

        this.userData = { 
            firstName: localStorage.getItem("FIRST_NAME"), 
            lastName: localStorage.getItem("LAST_NAME"),
            email: localStorage.getItem("EMAIL"),
            biography: 'Test biography.'
        }

        return this.userData;

    }


}