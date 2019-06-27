import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EndprojectServices } from 'src/app/services/endproject/endproject.service';

@Component({
    selector: 'app-endproject',
    templateUrl: './endproject.component.html'
})

export class EndprojectComponent {

    private tokenIn: Boolean;
    private user_data: any;
    private _id: string;
    proyecto: any = {
        idProyect: this._id,
        title: '',
        shortDescription: '',
        category: '',
        ubication: '',
        monetaryGoal: null,
        startDate: null,
        endDate: null,
        challenges: '',
        friends: [],
        reward: [{
            title: '',
            description: '',
            min_amount: ''
        }],
        longDescriptions: [{
            position: 1,
            title: "One title",
            description: '',
            image: ''
        }],
        paymentAccount: {
            identification_card: '',
            credit_card: '',
            owner_name: ''
        }
    };

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute
        , private endprojectService: EndprojectServices) {

        this._id = this.route.snapshot.params['_id'];
        this.proyecto.idProyect = this._id;
        console.log(this.proyecto.idProyect)
        console.log(this._id);

        this.tokenIn = authService.verifyTokenPage();

        if (this.tokenIn) {
            this.user_data = authService.getDataUser(); //Nombre usuario y otras cositas, para el inicio noma.
        } else {
            //Te redirige al inicio.
            this.router.navigateByUrl('/');
        }

    }

    onEndProject(): void {

        this.endprojectService.endProject(this.proyecto).subscribe(res => {
            console.log('Editado con éxito.');
            console.log(res.message);
            this.router.navigateByUrl('/');
        });
        /*if (form.valid) {
            this.endprojectService.endProject(form.value).subscribe(res => {
                console.log('Editado con éxito.');
                console.log(res.message)
            });
        } else {
            console.log('No valido.');
        }*/

    }

}