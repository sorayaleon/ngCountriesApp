import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';
  isError: boolean = false;

  constructor(private countryService: CountryService) { }

  search() {
    this.isError = false;
    console.log(this.term);
    this.countryService.searchCountry(this.term).subscribe(countries => {
      console.log(countries);
    }, (err) => {
      this.isError = true;
    });
  }
}
