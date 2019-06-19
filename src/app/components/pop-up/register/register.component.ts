import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {

    pruebita: any = {email: 'asd@hotmail.com'}
    registered: any = {};
    public isError = false;
    public isEmailError = false;

    onRegister(form: NgForm): void{
        
        if(form.valid){ //Valido si tiene todos los datos requeridos (required)
           
            if(this.registered.email == this.pruebita.email){
                // Si el email ya esta registrado
                this.isEmailError = true;
                setTimeout(()=>{
                    this.isEmailError = false;
                }, 4000);
            }
            console.log('Datos completados con exito.');

        } else {
            this.onIsError();
            console.log('Formulario no valido.')
        }
    }

    onIsError(): void{
        this.isError = true;
        setTimeout(()=>{
            this.isError = false;
        }, 4000);
    }


}
