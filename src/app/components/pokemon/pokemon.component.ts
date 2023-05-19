import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { SearchResponse } from 'src/app/models/pokemon';
import { AlertService } from 'src/app/services/alert.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  searchResponse?: SearchResponse;

  constructor(private ps: PokemonService, private as: AlertService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.ps.search("")
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.as.error(err.message);
          return of(undefined);
        })
      )
      .subscribe(sr => this.searchResponse = sr);
  }
}
