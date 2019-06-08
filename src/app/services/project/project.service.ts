import {Injectable} from '@angular/core';

@Injectable()

export class ProjectServices {

    proyectos: any = [
        {id: 1, titulo: 'Proyecto 1', autor: 'Christian Garcia', short_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        patrocinadores: '120', din_actual: '130K' , meta: '200K', days_left: '29', image_url:'./assets/img/test1.png', rating: '5',
        recompensas: [
            {cantidad: '5', titulo: 'Mistery Box', descrip: 'Recibe una caja misteriosa como regalo por creer en nosotros. Envío gratuito!',
            reclamados: '105', envio: 'todo el mundo' },
            {cantidad: '10', titulo: 'Secret Wars Comic #1', descrip: 'Comic conmemorativo por apoyarnos en esta nueva etapa.',
            reclamados: '20', envio: 'todo el mundo' },
        ]},
        {id: 2, titulo: 'Proyecto 2', autor: 'Antony Montalvo', short_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        patrocinadores: '90', din_actual: '40,540', meta: '90,000', days_left: '45', image_url:'./assets/img/test2.png', rating: ''},
        {id: 3, titulo: 'Proyecto 3', autor: 'Bryan Flores', short_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        patrocinadores: '78', din_actual: '39,990' , meta: '45,000', days_left: '17', image_url:'./assets/img/test3.png', rating: ''},
        {id: 4, titulo: 'Proyecto 4', autor: 'Erick Loardo', short_desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.',
        patrocinadores: '51', din_actual: '8592', meta: '20,000', days_left: '100', image_url:'./assets/img/test4.png', rating: ''},
    ];

    getProjects(){
        return this.proyectos;
    }

    searchProjects(id){
        return this.proyectos.filter((project) => project.id == id)[0] ||null;
    }

}