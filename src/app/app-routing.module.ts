import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/body/start/start.component';
import { ProjectComponent } from './components/body/project/project.component';
import { NewproComponent } from './components/body/newpro/newpro.component';

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'project/:id', component: ProjectComponent},
    {path: 'start_project', component: NewproComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
