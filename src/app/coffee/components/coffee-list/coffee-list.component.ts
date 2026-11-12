import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Coffee } from '../../models/coffee.model';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-list-component',
  standalone: false,
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})
export class CoffeeListComponent implements OnInit {

  coffees = signal<Coffee[]>([]);

  totalOrigen = computed(
    () => this.coffees().filter((cafe) => cafe.tipo === 'Café de Origen').length
  );

  totalBlend = computed(
    () => this.coffees().filter((cafe) => cafe.tipo === 'Blend').length
  );

  private coffeeService = inject(CoffeeService);

  getCafes(): void {
    this.coffeeService.getCafes().subscribe((coffees) => {
      this.coffees.set(coffees);
    });
  }

  ngOnInit(): void {
    this.getCafes();
  }
}
