import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { InfoProjectComponent } from '../info-project/info-project.component';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'info-proyecto/:id', component: InfoProjectComponent },
  { path: 'quienes-somos', component: WhoWeAreComponent },
  { path: 'contactanos', component: ContactUsComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes);


