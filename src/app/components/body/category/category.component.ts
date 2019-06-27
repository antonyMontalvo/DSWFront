import { Component } from '@angular/core';
import { ProjectServices } from 'src/app/services/createproject/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectscategoryServices } from 'src/app/services/projectscategory/projectscategory.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html'
})

export class CategoryComponent {

    categoria = null;
    proyectos: any = [];

    constructor(private projectServices: ProjectServices,
        private projectCategoryService: ProjectscategoryServices, private route: ActivatedRoute,
        private router:Router) {

        this.categoria = this.route.snapshot.params['cat'];
        console.log(this.categoria);

        
        this.projectCategoryService.getProjectCategory(this.categoria).subscribe(
            data => {
                this.proyectos = data.message;
                console.log(this.proyectos); 
            }
        )
        
    }

    async getCategory(data: string){ //data es la variable que viene del html 

        this.categoria = data;
        this.projectCategoryService.getProjectCategory(this.categoria).subscribe(
            data => {
                this.proyectos = data.message;
                console.log(this.proyectos); 
            }
        )
        console.log(this.categoria);
    }

}