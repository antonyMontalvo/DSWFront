import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { BeforeprojectServices } from 'src/app/services/createproject/beforeproject.service';

@Component({
    selector: 'app-befpro',
    templateUrl: './befpro.component.html'
})

export class BefproComponent {
    
    constructor(private beforeProject: BeforeprojectServices, private route:Router){
        
    }


    ngOnInit(){

    }

    onCreateB(form): void{

        if(form.valid){
            this.beforeProject.createProject(form.value).subscribe(res =>{
                console.log('Guardado con éxito.');
            });
        } else {
            console.log('No valido.');
        }

    }
   
}
