import { Component, HostListener } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    NgParticlesModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'portfolio-app';

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const topButton = document.querySelector('.back-to-top') as HTMLElement;
    if (window.scrollY > 300) {
      topButton.style.display = 'flex';
    } else {
      topButton.style.display = 'none';
    }
  }
}


