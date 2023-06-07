import { RegistrationComponent } from './pages/registration/registration.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { KidsComponent } from './pages/kids/kids.component';
import { WomenComponent } from './pages/woman/women.component';
import { MenComponent } from './pages/man/men.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'man',component:MenComponent},
  {path:'woman',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'registration',component:RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
