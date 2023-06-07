import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ManClothingService } from './services/man-clothing.service';
import { WomanClothingService } from './services/woman-clothing.service';
import { KidsClothingService } from './services/kids-clothing.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './sharedPage/navbar/navbar.component';
import { FooterComponent } from './sharedPage/footer/footer.component';
import { MenComponent } from './pages/man/men.component';
import { WomenComponent } from './pages/woman/women.component';
import { KidsComponent } from './pages/kids/kids.component';
import { HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './pages/registration/registration.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ManClothingService,WomanClothingService,KidsClothingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
