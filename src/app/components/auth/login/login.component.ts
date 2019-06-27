import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) {
        
    }

    ngOnInit() {

    }

    public isError = false;
    public isWrongData = false; // Variable para el status de la petición

    onLogin(form): void {
        
        if (form.valid) { // Valido si todos los cuadros estan completos con los datos requeridos
            this.authService.login(form.value).subscribe(res => {
                if(res.status != '201'){
                    this.onIsWrongData();
                }else{
                    this.router.navigateByUrl('/');
                }
                

                // Utilizando el status para mostrar mensaje de email o password incorrectos.
               

            });

        } else {
            console.log('Datos ingresados invalidos / Formulario invalido.');
            this.onIsError();
        }
       
    }

    

    onIsError(): void {
        this.isError = true;
        // Para qué desapareza el error después de xxxx milisegs.
        setTimeout(() => {
            this.isError = false;
        }, 4000);
    }

    // Error de email o password
    onIsWrongData(): void {
        this.isWrongData = true;
        setTimeout(()=>{
            this.isWrongData = false;
        }, 3000);
    }

}
