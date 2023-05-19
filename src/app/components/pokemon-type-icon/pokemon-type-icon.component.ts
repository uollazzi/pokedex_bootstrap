import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-type-icon',
  templateUrl: './pokemon-type-icon.component.html',
  styleUrls: ['./pokemon-type-icon.component.css']
})
export class PokemonTypeIconComponent {
  type_string = "normal";

  @Input()
  set type(value: string) {
    switch (value) {
      case "Colorless":
        this.type_string = "normal";
        break;
      case "Darkness":
        this.type_string = "dark";
        break;
      case "Dragon":
        this.type_string = "dragon";
        break;
      case "Fairy":
        this.type_string = "fairy";
        break;
      case "Fighting":
        this.type_string = "fighting";
        break;
      case "Fire":
        this.type_string = "fire";
        break;
      case "Grass":
        this.type_string = "grass";
        break;
      case "Lightning":
        this.type_string = "electric";
        break;
      case "Metal":
        this.type_string = "steel";
        break;
      case "Psychic":
        this.type_string = "psychic";
        break;
      case "Water":
        this.type_string = "water";
        break;
      default:
        this.type_string = "normal";
        break;
    }
  }
}
