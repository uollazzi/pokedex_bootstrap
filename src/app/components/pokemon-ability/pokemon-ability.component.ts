import { Component, Input } from '@angular/core';
import { Ability } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-ability',
  templateUrl: './pokemon-ability.component.html',
  styleUrls: ['./pokemon-ability.component.css']
})
export class PokemonAbilityComponent {
  @Input()
  ability?: Ability;
}
