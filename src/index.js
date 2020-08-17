import './style.css';
import Game from './game.html';
import SnakeGame from './snake-game/snake-game.js';

document.body.innerHTML = Game;

let game = new SnakeGame("snake-game");
game.startGame();


