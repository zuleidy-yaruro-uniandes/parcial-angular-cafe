import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private apiUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  getCafes(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }
}

