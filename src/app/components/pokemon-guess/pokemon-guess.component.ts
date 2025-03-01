import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-guess',
  templateUrl: './pokemon-guess.component.html',
  styleUrls: ['./pokemon-guess.component.scss']
})
export class PokemonGuessComponent implements OnInit {
  pokemonId!: number;
  silhouetteImage!: string;
  options: string[] = [];
  errorMessage: string | null = null;
  isLoading = true;
  guessResult: 'correct' | 'incorrect' | null = null;
  fullImage!: string;
  correctName!: string;
  score = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadScore();
    this.fetchRandomPokemon();
  }

  fetchRandomPokemon(): void {
    this.isLoading = true;
    this.errorMessage = null;
    this.guessResult = null;

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

  makeGuess(guessedName: string): void {
    this.isLoading = true;
    this.pokemonService.guessPokemon(this.pokemonId, guessedName).subscribe({
      next: (response) => {
        this.guessResult = response.guessCorrect ? 'correct' : 'incorrect';
        this.fullImage = response.fullImage;
        this.correctName = response.correctName;
        this.isLoading = false;

        if (response.guessCorrect) {
          this.updateScore();
        }
      },
      error: (err) => {
        console.error('Error submitting guess:', err);
        this.errorMessage = 'Something went wrong. Please try again!';
        this.isLoading = false;
      }
    });
  }

  updateScore(): void {
    this.score += 1;
    localStorage.setItem('playerScore', this.score.toString());
  }

  loadScore(): void {
    const savedScore = localStorage.getItem('playerScore');
    if (savedScore) {
      this.score = parseInt(savedScore, 10);
    }
  }

  resetScore(): void {
    this.score = 0;
    localStorage.removeItem('playerScore');
  }

}
