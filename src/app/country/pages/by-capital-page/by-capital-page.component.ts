import { Component } from '@angular/core';
import { CountryInputSearchComponent } from '../../components/country-input-search/conuntry-input-search.component';
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryInputSearchComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  onSearchByCapital( capital: string ) {
    console.log({ capital });
  }
}
