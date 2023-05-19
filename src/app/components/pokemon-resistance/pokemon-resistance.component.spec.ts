import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonResistanceComponent } from './pokemon-resistance.component';

describe('PokemonResistanceComponent', () => {
  let component: PokemonResistanceComponent;
  let fixture: ComponentFixture<PokemonResistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonResistanceComponent]
    });
    fixture = TestBed.createComponent(PokemonResistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
