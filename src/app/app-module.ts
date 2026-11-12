import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CoffeeModule } from './coffee/coffee.module';
import { App } from './app';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    CoffeeModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
