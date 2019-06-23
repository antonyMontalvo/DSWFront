import {Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {
    
    private tokenIn: Boolean;
    usuario: any;
    

    constructor(private authService: AuthService, private router: Router){

        /* Se llama a la lista para mostrar el dato solicitado desde el servicio */
        this.authService.currentUserName$.subscribe(userName =>{
            this.usuario = userName;
        });
        
    }

   

  

}
