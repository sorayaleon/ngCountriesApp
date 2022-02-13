import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  constructor() { }

  activateRegion( region: string) {
    this.activeRegion = region;
  }

}
