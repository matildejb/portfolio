import { Routes } from '@angular/router';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    //Ruta principal, siempre que carge la app nos redirige a la home
  { path: '', pathMatch: 'full', redirectTo: '/matilde' },
  { path: 'matilde', component: ThreeSceneComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
