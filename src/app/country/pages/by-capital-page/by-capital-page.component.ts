import { Component, inject } from '@angular/core';
import { CountryInputSearchComponent } from '../../components/country-input-search/conuntry-input-search.component';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryInputSearchComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})


export class ByCapitalPageComponent {
  countryService = inject(CountryService);


  onSearch(query: string) {
    this.countryService.searchByCapital(query).subscribe((countries) => {
        console.log(countries);
      });
  }
}
