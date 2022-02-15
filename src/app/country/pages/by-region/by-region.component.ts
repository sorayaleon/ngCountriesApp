import { Component } from '@angular/core';

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

  constructor() { }

  getCSSClass(region: string) : string {
    return (region === this.activeRegion) ? 'btn btn-primary mx-1' : 'btn btn-outline-primary mx-1'
  }

  activateRegion( region: string) {
    this.activeRegion = region;
  }

}
