import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-guess',
  templateUrl: './pokemon-guess.component.html',
  styleUrls: ['./pokemon-guess.component.scss']
})
export class PokemonGuessComponent {
  pokemonId!: number;
  silhouetteImage!: string;
  options: string[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.fetchRandomPokemon();
  }

  fetchRandomPokemon(): void {
    this.pokemonService.getRandomPokemon().subscribe({
      next: (data) => {
        this.pokemonId = data.id;
        this.silhouetteImage = data.silhouetteImage;
        this.options = data.options;
      },
      error: (err) => {
        console.error('Error fetching Pokemon:', err);
      }
    });
  }

}
