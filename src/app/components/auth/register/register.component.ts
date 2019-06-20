import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    
    constructor(private authService: AuthService, private router:Router){

    }

    ngOnInit() {
        
    }

    onRegister(form): void{

        if(form.valid){
            this.authService.register(form.value).subscribe(res =>{
                this.router.navigateByUrl('/');

            });
        } else {
            console.log('No valido.');
        }

        
    }

    /*
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
    */

}
