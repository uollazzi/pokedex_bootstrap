import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonPreviewComponent } from './components/pokemon-preview/pokemon-preview.component';
import { AlertComponent } from './components/alert/alert.component';
import { PokemonAttackComponent } from './components/pokemon-attack/pokemon-attack.component';
import { PokemonTypeIconComponent } from './components/pokemon-type-icon/pokemon-type-icon.component';
import { PokemonAbilityComponent } from './components/pokemon-ability/pokemon-ability.component';
import { PokemonResistanceComponent } from './components/pokemon-resistance/pokemon-resistance.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailComponent,
    NavbarComponent,
    PokemonPreviewComponent,
    AlertComponent,
    PokemonAttackComponent,
    PokemonTypeIconComponent,
    PokemonAbilityComponent,
    PokemonResistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
