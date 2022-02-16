import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ term }`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ term }`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryByCode(term: string): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ term }`;

    return this.http.get<Country>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    console.log(url)

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
