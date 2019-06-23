import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {
    
    token_id: any;
    user_data: any;

    constructor(private route: ActivatedRoute, private authService: AuthService, private router:Router){
        
        /*Con snapshots.params['token'] recibes la variable :token de la ruta "profile/:token"
        que se encuentra en el app-routing.module. En el navbar, se define la ruta para cada 
        usuario: "profile/{{authService.getToken()}}", obtieniendo la token de cada user y 
        esta es la que se obtiene con snapshot en esta ventana. */

        /* Solo faltaría tener una id y con esta realizar una búsqueda de todos los datos del usuario
        (proyectos, etc.). */

        this.token_id = this.route.snapshot.params['token'];

        if(this.token_id == authService.getToken()){
            this.user_data = authService.getDataUser();
            console.log('gaaa');
        }else{
            this.router.navigateByUrl('/');
        }

    }

}
