/**
 * This code initializes the platform that your application runs in, then uses the platform to bootstrap your AppModule.
 * App bootstrapping is a separate concern from creating a module or presenting a view. Testing the component is much
 * easier if it doesn't also try to run the entire application.
 * Created by bohan on 10/15/16.
 */
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);