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
  errorMessage: string | null = null;
  isLoading = true;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.fetchRandomPokemon();
  }

  fetchRandomPokemon(): void {
    this.isLoading = true;
    this.pokemonService.getRandomPokemon().subscribe({
      next: (data) => {
        this.pokemonId = data.id;
        this.silhouetteImage = data.silhouetteImage;
        this.options = data.options;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching Pokemon:', err);
        this.errorMessage = 'Failed to load Pokemon. Please try again!';
        this.isLoading = false;
      }
    });
  }

}
