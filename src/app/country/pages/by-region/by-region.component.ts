import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  
  // regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];

  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getCSSClass(region: string) : string {
    return (region === this.activeRegion) ? 'btn btn-primary mx-1' : 'btn btn-outline-primary mx-1'
  }

  activateRegion( region: string) {
    if(region == this.activeRegion) {
      return;
    }
    this.activeRegion = region;
    this.countries = [];
    this.countryService.searchRegion(region).subscribe(countries => this.countries = countries);
  }

}
