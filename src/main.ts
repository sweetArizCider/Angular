import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app.routes';
import { HomeComponent } from './views/home/home.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(HomeComponent, {
  providers: [provideRouter(routes)],

})
