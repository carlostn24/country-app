import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService ) {}

  public ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  public searchByCapital( term: string ): void {
    this.isLoading = true;
    this.countriesService.searchByCapital( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      } );
  }

}
