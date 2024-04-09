import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionContries;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface RegionContries {
  region: Region;
  countries: Country[];
}
