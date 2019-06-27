import { Component } from '@angular/core';
import { ProjectServices } from 'src/app/services/createproject/project.service';
import { ActivatedRoute } from '@angular/router';
import { DataprojectServices } from 'src/app/services/dataproject/dataproject.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html'
})

export class ProjectComponent {

    //proyectos: any = [];
    id = null;
    proyecto: any;
    user_data: any;

    constructor(private route: ActivatedRoute, private projectServices: ProjectServices, 
        private dataProjectService: DataprojectServices, private authService: AuthService) {
        
        this.user_data = authService.getDataUser();
        //this.proyectos = this.projectServices.getProjects();
        this.id = this.route.snapshot.params['id'];
        this.dataProjectService.getAllDataproject(this.id).subscribe(
            data => {
                this.proyecto = data.message;
                console.log(this.proyecto); 
            }
        )
        //this.proyecto = this.projectServices.searchProjects(this.id);
    }

}