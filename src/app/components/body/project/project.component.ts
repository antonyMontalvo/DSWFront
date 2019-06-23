import { Component } from '@angular/core';
import { ProjectServices } from 'src/app/services/createproject/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html'
})

export class ProjectComponent {

    proyectos: any = [];
    id = null;
    proyecto: any = {};

    constructor(private route: ActivatedRoute, private projectServices: ProjectServices) {
        this.proyectos = this.projectServices.getProjects();
        this.id = this.route.snapshot.params['id'];
        this.proyecto = this.projectServices.searchProjects(this.id);
    }

}