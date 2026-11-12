import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoffeeModule } from './coffee/coffee-module';
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
  ],
  bootstrap: [App]
})
export class AppModule { }
