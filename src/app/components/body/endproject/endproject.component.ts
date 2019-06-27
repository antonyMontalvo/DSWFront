import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-endproject',
    templateUrl: './endproject.component.html'
})

export class EndprojectComponent {
    
    private tokenIn: Boolean;
    private user_data: any;

    constructor(private authService: AuthService, private router: Router){
        
        this.tokenIn = authService.verifyTokenPage();

        if(this.tokenIn){
            this.user_data = authService.getDataUser(); //Nombre usuario y otras cositas.
        }else{
            //Te redirige al inicio.
            this.router.navigateByUrl('/');
        }
        
    }

}