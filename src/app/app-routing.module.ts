import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';
import { EditeducationComponent } from './components/education/editeducation.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/project/edit-project.component';
import { NewProjectComponent } from './components/project/new-project.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newexp', component: NewExperienceComponent},
  { path: 'editexp/:id', component: EditExperienceComponent},
  { path: 'newedu', component: NeweducationComponent},
  { path: 'editedu/:id', component: EditeducationComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editproject/:id', component: EditProjectComponent},
  { path: 'newproject', component: NewProjectComponent},
  { path: 'editaboutme/:id', component: EditAboutMeComponent},
  { path: 'editbanner/:id', component: EditBannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
