import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries-interfaces';
export class CountryMapper {
  static mapFromRESTCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      nameSpanish: restCountry.translations['spa'].common ?? 'No Spanish translation',
      capital: restCountry.capital.join(','),
      population: restCountry.population,
    };
  }

  static mapFromRESTCountries(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(CountryMapper.mapFromRESTCountry);
  }
}
