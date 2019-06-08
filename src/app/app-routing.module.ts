import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/body/start/start.component';
import { ProjectComponent } from './components/body/project/project.component';

const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'project/:id', component: ProjectComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
