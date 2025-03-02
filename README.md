# GuessPokemonApp

A simple Angular app where users guess the Pokemon based on its silhouette.

## Features
Fetches a random Pokemon silhouette.
Provides multiple-choice options for guessing.
Tracks user score for correct guesses.
Stores the score in local storage.
Displays full Pokemon image after guessing.

## Prerequisites
npm (v10.2.5)
Angular CLI: 16.1.8
Node: 18.17.0

to check versions this command can be used : ng version

## How to run
git clone https://github.com/sumitmandal5/guess-pokemon-app.git

cd guess-pokemon-app

npm install

Start the backend API

Start the angular app using the command : ng serve

This will start the angular app on development : http://localhost:4200

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Improvements
1. Add an end condition to the game and add the corresponding component to display the final score.
2. Add Unit tests.
3. Add logging.
4. Add end to end tests.
5. Improve error-handling by considering more edge cases.

