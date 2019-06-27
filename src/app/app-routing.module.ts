import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { ProjectComponent } from './components/body/project/project.component';
import { EndprojectComponent } from './components/body/endproject/endproject.component';
import { ProfileComponent } from './components/body/profile/profile.component';
import { ProfileconComponent } from './components/body/profileconfig/profileconfig.component';
import { AboutComponent } from './components/body/about/about.component';
import { CategoryComponent } from './components/body/category/category.component';
import { StartprojectComponent } from './components/body/startproject/startproject.component';
import { AdminComponent } from './components/body/admin/admin.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'project/:id', component: ProjectComponent},
    {path: 'end_project/:_id', component: EndprojectComponent},
    {path: 'profile/:token', component: ProfileComponent},
    {path: 'config', component: ProfileconComponent},
    {path: 'about', component: AboutComponent},
    {path: 'category/:cat', component: CategoryComponent},
    {path: 'start_project', component: StartprojectComponent},
    {path: 'admin', component: AdminComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
