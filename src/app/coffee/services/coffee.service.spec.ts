import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { CoffeeService } from './coffee.service';
import { Coffee } from '../models/coffee.model';
import { environment } from '../../../environments/environment';

describe('CoffeeService', () => {
  let service: CoffeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(CoffeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get the coffees with a GET request', () => {
    const mockCoffees: Coffee[] = [
      new Coffee(1, 'Café Uno', 'Blend', 'Salgar, Antioquia', 'Caramelo', 1800, 'img1.jpg'),
    ];

    service.getCafes().subscribe((coffees) => {
      expect(coffees).toEqual(mockCoffees);
    });

    const req = httpMock.expectOne(environment.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockCoffees);
  });
});
