import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, appConfig);

// platformBrowserDynamic().bootstrapModule(AppModule).catch((err) => console.log(err));
