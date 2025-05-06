import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import  type { RESTCountry } from '../interfaces/rest-countries-interfaces';
import  { catchError, map, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country-mapper';

const API_URL = 'https://restcountries.com/v3.1/';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string) {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}capital/${query}`)
      .pipe(
        map( restCountries => CountryMapper.mapFromRESTCountries(restCountries)),
        catchError(error => {
          console.error('Error fetching countries by capital:', error);
          return throwError(() => new Error(`Error fetching countries by capital ${query}`));
        })
      )
  }

}
