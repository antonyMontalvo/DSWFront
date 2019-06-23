import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/body/start/start.component';
import { ProjectComponent } from './components/body/project/project.component';
import { NewproComponent } from './components/body/newpro/newpro.component';
import { ProfileComponent } from './components/body/profile/profile.component';
import { ProfileconComponent } from './components/body/profilecon/profilecon.component';
import { AboutComponent } from './components/body/about/about.component';
import { CategoryComponent } from './components/body/category/category.component';
import { BefproComponent } from './components/body/befpro/befpro.component';


const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'project/:id', component: ProjectComponent},
    {path: 'start_project', component: NewproComponent},
    {path: 'profile/:token', component: ProfileComponent},
    {path: 'config', component: ProfileconComponent},
    {path: 'about', component: AboutComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'step_one', component: BefproComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
