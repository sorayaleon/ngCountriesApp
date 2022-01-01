import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(term: string) {
    this.isError = false;
    this.term = term;

    this.countryService.searchCapital(this.term).subscribe(countries => {
      this.countries = countries;
    }, (err) => {
      this.isError = true;
      this.countries = [];
    });
  }

}
