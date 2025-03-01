import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGuessComponent } from './pokemon-guess.component';

describe('PokemonGuessComponent', () => {
  let component: PokemonGuessComponent;
  let fixture: ComponentFixture<PokemonGuessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonGuessComponent]
    });
    fixture = TestBed.createComponent(PokemonGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
