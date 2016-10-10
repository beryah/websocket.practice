import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import '../../stylesheets/style.css'
import { AppModule  } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);