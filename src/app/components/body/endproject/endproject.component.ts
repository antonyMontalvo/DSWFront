import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-endproject',
    templateUrl: './endproject.component.html'
})

export class EndprojectComponent {
    
    private tokenIn: Boolean;

    constructor(private authService: AuthService, private router: Router){
        
        this.tokenIn = authService.verifyTokenPage();

        if(this.tokenIn){
            //No hace nada si es true
        }else{
            //Te redirige al inicio.
            this.router.navigateByUrl('/');
        }
        
    }

}