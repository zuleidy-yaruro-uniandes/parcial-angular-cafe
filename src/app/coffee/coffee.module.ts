import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';

@NgModule({
  declarations: [CoffeeListComponent],
  imports: [CommonModule],
  providers: [],
  exports: [CoffeeListComponent],
})
export class CoffeeModule {}
