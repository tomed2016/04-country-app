import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-input-search',
  imports: [],
  templateUrl: './country-input-search.component.html',
})
export class CountryInputSearchComponent {
  placeholder = input<string>('Buscar');
  capital = output<string>()
}
