import {Component} from '@angular/core';
import { ProjectServices } from 'src/app/services/createproject/project.service';
import { HomeprojectsServices } from 'src/app/services/homeprojects/homeprojects.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    
   proyectos: any = [];

   constructor(private projectServices: ProjectServices, private homeProjectService: HomeprojectsServices){
        this.proyectos = this.projectServices.getProjects();
        
        /*this.homeProjectService.getAllProjectsNoCategory().subscribe(
            data => {
                this.proyectos = data.message;
                console.log(this.proyectos); // Se guardaron todos los proyectos en user_projects.
            }
        )*/
   }



    /*
    Glosario:
    - Rating: número que ira del 1 al 5, servirá para saber que proyectos mostrar en la página principal
    (10: popular, ... , 1: no popular)
    */
}