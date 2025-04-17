import { Component } from '@angular/core';
import { CountryInputSearchComponent } from "../../components/country-input-search/conuntry-input-search.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-country-page',
  imports: [CountryInputSearchComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent { }
