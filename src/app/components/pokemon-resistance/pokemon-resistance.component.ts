import { Component, Input } from '@angular/core';
import { Resistance } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-resistance',
  templateUrl: './pokemon-resistance.component.html',
  styleUrls: ['./pokemon-resistance.component.css']
})
export class PokemonResistanceComponent {
  @Input()
  resistance?: Resistance;
}
