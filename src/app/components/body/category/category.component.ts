import { Component } from '@angular/core';
import { ProjectServices } from 'src/app/services/project/project.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})

export class CategoryComponent {
    proyectos: any = [];

    constructor(private projectServices: ProjectServices) {
        this.proyectos = this.projectServices.getProjects();
        console.log(this.proyectos);
    }

}