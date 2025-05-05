import { Component, HostListener, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    NgParticlesModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-app';
  menuOpen = false;
  isLightMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      this.isLightMode = saved === 'light';
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('lightmode');
      }
    }
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const topButton = document.querySelector('.back-to-top') as HTMLElement;
    if (topButton) {
      topButton.style.display = window.scrollY > 300 ? 'flex' : 'none';
    }
  }

  toggleTheme() {
    const body = document.body;
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      body.classList.add('lightmode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('lightmode');
      localStorage.setItem('theme', 'dark');
    }
  }
}