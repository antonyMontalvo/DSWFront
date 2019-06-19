import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    usuario: any = { email: 'asd@hotmail.com', password: '123a' };
    user: any = {};
    public isError = false;
    public isErrorData = false;

    //Login validation
    onLogin(form: NgForm) {

        if (form.valid) {
            // Comparacion para ver si los datos ingresados son iguales
            if (this.user.email == this.usuario.email && this.user.password == this.usuario.password) {
                console.log('Ingresado.');
            } else {
                // Si los datos no son iguales 
                this.onIsErrorData();
                console.log('Usuario o password incorrecto / no existente.');
            }

        } else {
            // Es valid: false cuando el formulario esta vacío o no se reciben datos correctos (patron del email).
            this.onIsError();
            console.log('Formulario vacío o datos incorrectos.')
        }

    }
    // End login validation

    onIsError(): void {
        this.isError = true;
        setTimeout(() => {
            this.isError = false;
        }, 4000);
    }

    onIsErrorData(): void {
        this.isErrorData = true;
        setTimeout(() => {
            this.isErrorData = false;
        }, 4000);
    }
}
