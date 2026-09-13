import Phaser from 'phaser';

class PlaceholderScene extends Phaser.Scene {
  constructor() {
    super('PlaceholderScene');
  }

  preload() {
    // Assets worden hier later geladen zodra het game design bekend is.
  }

  create() {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2 - 20, 'GTA7', {
        fontFamily: 'monospace',
        fontSize: '48px',
        color: '#ffffff',
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 30, 'Build & deploy pipeline werkt.\nGame komt eraan...', {
        fontFamily: 'monospace',
        fontSize: '16px',
        color: '#aaaaaa',
        align: 'center',
      })
      .setOrigin(0.5);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  backgroundColor: '#222222',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [PlaceholderScene],
};

new Phaser.Game(config);
