import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StartprojectServices } from 'src/app/services/createproject/startproject.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-startproject',
    templateUrl: './startproject.component.html'
})

export class StartprojectComponent {

    private tokenIn: boolean;

    constructor(private startProject: StartprojectServices, private authService: AuthService,
        private router: Router) {

        this.tokenIn = authService.verifyTokenPage();

        if (this.tokenIn) {
            //No hace nada si es true
        } else {
            //Te redirige al inicio.
            this.router.navigateByUrl('/');
        }

    }

    ngOnInit() { }

    onCreateB(form): void {

        if (form.valid) {
            this.startProject.createProject(form.value).subscribe(res => {
                console.log('Guardado con éxito.');
                console.log(res.message)
                this.router.navigateByUrl(`/end_project/${res.message._id}`);
            });
        } else {
            console.log('No valido.');
        }

    }

}
