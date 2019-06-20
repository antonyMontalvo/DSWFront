import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-newpro',
    templateUrl: './newpro.component.html'
})

export class NewproComponent {
    
    private tokenIn: Boolean;

    constructor(private authService: AuthService, private router: Router){
        this.tokenIn = authService.verifyTokenPage();
        if(this.tokenIn){

        }else{
            this.router.navigateByUrl('/');
        }
    }

}