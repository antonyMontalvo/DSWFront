import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserprofileServices } from 'src/app/services/userprofile/userprofile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {
    
    token_id: any;
    user_data: any;
    user_projects: any = [];

    constructor(private route: ActivatedRoute, private authService: AuthService, private router:Router,
        private userprofileService: UserprofileServices){
        
        /*Con snapshots.params['token'] recibes la variable :token de la ruta "profile/:token"
        que se encuentra en el app-routing.module. En el navbar, se define la ruta para cada 
        usuario: "profile/{{authService.getToken()}}", obtieniendo la token de cada user y 
        esta es la que se obtiene con snapshot en esta ventana. */

        this.token_id = this.route.snapshot.params['token'];

        if(this.token_id == authService.getToken()){
            
            // Solo nombre y email (básico)
            this.user_data = authService.getDataUser();
            
            //Obtiene proyectos
            this.userprofileService.getAllProjects().subscribe(
                data => {
                    this.user_projects = data.message;
                    console.log(this.user_projects); // Se guardaron todos los proyectos en user_projects.
                }
            )
            
        }else{
            this.router.navigateByUrl('/');
        }


    }

    

}
