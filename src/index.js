import { SimpleScene } from './scenes/simple-scene';
import { Game } from 'phaser';

const gameConfig = {
  width: 680,
  height: 400,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 30 },
      debug: false
    }
  },
  scene: SimpleScene
};

new Game(gameConfig);
