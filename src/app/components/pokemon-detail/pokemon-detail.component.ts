import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { AlertService } from 'src/app/services/alert.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  error?: HttpErrorResponse;
  pokemon?: Pokemon;

  constructor(
    private ps: PokemonService,
    private as: AlertService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.ps.getById(id)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.as.error(err.message, err.error?.error.message);
            return of(undefined);
          })
        )
        .subscribe(pokemonResponse => {
          if (pokemonResponse) {
            this.pokemon = pokemonResponse.data
          }
        });
    }
  }
}
