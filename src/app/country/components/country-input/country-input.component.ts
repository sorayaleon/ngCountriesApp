import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {

  @Output() onEnter: EventEmitter<any> = new EventEmitter();

  term: string = '';

  search() {
    this.onEnter.emit(this.term);
  }

}
