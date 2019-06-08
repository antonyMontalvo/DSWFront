import {Component} from '@angular/core';
import { ProjectServices } from 'src/app/services/project/project.service';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html'
})

export class StartComponent {
    
   proyectos: any = [];

   constructor(private projectServices: ProjectServices){
        this.proyectos = this.projectServices.getProjects();
        console.log(this.proyectos);
   }



    /*
    Glosario:
    - Rating: número que ira del 1 al 5, servirá para saber que proyectos mostrar en la página principal
    (10: popular, ... , 1: no popular)
    */
}