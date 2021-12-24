import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = 'Hello world';

  constructor() { }

  search() {
    console.log(this.term);
  }
}
