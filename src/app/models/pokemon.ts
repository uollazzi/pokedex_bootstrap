export interface SearchResponse {
  data: Pokemon[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface PokemonResponse {
  data: Pokemon;
}

export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level?: string;
  hp: string;
  types: string[];
  attacks?: Attack[];
  weaknesses?: Resistance[];
  resistances?: Resistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: Set;
  number: string;
  artist: string;
  rarity?: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: PokemonImages;
  tcgplayer?: Tcgplayer;
  cardmarket?: Cardmarket;
  evolvesFrom?: string;
  abilities?: Ability[];
  evolvesTo?: string[];
  flavorText?: string;
  rules?: string[];
  regulationMark?: string;
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: { [key: string]: number };
}

export interface PokemonImages {
  small: string;
  large: string;
}

export interface Legalities {
  unlimited: string;
  expanded?: string;
  standard?: string;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode?: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImages;
}

export interface SetImages {
  symbol: string;
  logo: string;
}

export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices?: Prices;
}

export interface Prices {
  holofoil?: The1_StEditionHolofoil;
  reverseHolofoil?: The1_StEditionHolofoil;
  normal?: The1_StEditionHolofoil;
  "1stEditionHolofoil"?: The1_StEditionHolofoil;
  unlimitedHolofoil?: The1_StEditionHolofoil;
}

export interface The1_StEditionHolofoil {
  low: number;
  mid: number;
  high: number;
  market: number | null;
  directLow: number | null;
}
