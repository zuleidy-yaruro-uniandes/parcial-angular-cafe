import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CoffeeListComponent } from './coffee-list.component';
import { Coffee } from '../../models/coffee.model';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: HTMLElement;

  const coffeeTest: Coffee[] = [
    new Coffee(1, 'Café Prueba Uno', 'Blend', 'Salgar, Antioquia', 'Caramelo', 1800, 'img1.jpg'),
    new Coffee(2, 'Café Prueba Dos', 'Café de Origen', 'Guatapé, Antioquia', 'Cacao', 1700, 'img2.jpg'),
    new Coffee(3, 'Café Prueba Tres', 'Café de Origen', 'Chinchiná, Caldas', 'Nuez', 1500, 'img3.jpg'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeListComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    component.coffees.set(coffeeTest);
    fixture.detectChanges();

    debug = fixture.nativeElement as HTMLElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should have a table with 3 rows plus the header', () => {
    expect(debug.querySelectorAll('thead tr').length).toBe(1);
    expect(debug.querySelectorAll('tbody tr').length).toBe(3);
    expect(debug.querySelectorAll('table tr').length).toBe(4);
  });

  test('should show the header columns', () => {
    const headers = Array.from(debug.querySelectorAll('thead th')).map((th) =>
      th.textContent?.trim()
    );
    expect(headers).toEqual(['#', 'Nombre', 'Tipo', 'Región']);
  });

  test('should show the coffee data in each row', () => {
    const filas = debug.querySelectorAll('tbody tr');
    filas.forEach((fila, i) => {
      const celdas = fila.querySelectorAll('th, td');
      expect(celdas[0].textContent?.trim()).toBe(String(coffeeTest[i].id));
      expect(celdas[1].textContent?.trim()).toBe(coffeeTest[i].nombre);
      expect(celdas[2].textContent?.trim()).toBe(coffeeTest[i].tipo);
      expect(celdas[3].textContent?.trim()).toBe(coffeeTest[i].region);
    });
  });
});