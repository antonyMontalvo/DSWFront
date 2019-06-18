import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html'
})

export class PopupComponent {
    
    usuario: any = {email: 'asd@hotmail.com', password: '123a'};
    user: any = {};
    public isError = false;

    onLogin(form: NgForm){
        console.log(form);
        if(form.valid){ //valid si recibe ambos datos
            if(this.usuario.email == this.user.email && this.usuario.password == this.user.password){
                console.log('Valid');
            }else{
                console.log('no valid');
                this.isError = true;
                //Para que después un un tiempo se borre solito
                setTimeout(()=>{
                    this.isError = false;
                },4000)
            }
        }else{
            console.log('email no valido');
            this.isError = true;
            setTimeout(()=>{
                this.isError = false;
            }, 4000)
        }
    }

}
