import {Component} from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html'
})

export class StartComponent {
    
    proyectos: any = [
        {titulo: 'Proyecto 1', autor: 'Christian Garcia', short_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        patrocinadores: '120', meta: '200K', days_left: '29', image_url:'./assets/img/test1.png'},
        {titulo: 'Proyecto 2', autor: 'Antony Montalvo', short_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        patrocinadores: '90', meta: '90,000', days_left: '45', image_url:'./assets/img/test2.png'},
        {titulo: 'Proyecto 3', autor: 'Bryan Flores', short_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        patrocinadores: '78', meta: '45,000', days_left: '17', image_url:'./assets/img/test3.png'},
        {titulo: 'Proyecto 4', autor: 'Erick Loardo', short_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        patrocinadores: '51', meta: '20,000', days_left: '100', image_url:'./assets/img/test4.png'},
    ];


}