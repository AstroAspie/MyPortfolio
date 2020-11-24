// Create your global variables here

class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    })
  }

  preload() {
    // We have preloaded our images such as the background, the coins, the digging image etc.
    this.load.image('board', 'https://content.codecademy.com/courses/learn-phaser/Treasure%20Hunter/Gameboard%20Default.png', {
      frameWidth: 240,
      frameHeight: 320
    });
    this.load.image('gold', 'https://content.codecademy.com/courses/learn-phaser/Treasure%20Hunter/gold%20coin.png');
    this.load.image('playerGold', 'https://content.codecademy.com/courses/learn-phaser/Treasure%20Hunter/gold%20coin%20shine.png');
    this.load.image('dig', 'https://content.codecademy.com/courses/learn-phaser/Treasure%20Hunter/dug%20hole.png');
    this.load.image('blank', 'https://content.codecademy.com/courses/learn-phaser/Treasure%20Hunter/blank.png'); // These are the actual images / tiles that load on top of 'board'
  }

  create() {
    // The background is provided below
    this.add.sprite(240, 320, 'board');      
    // Create the for loops to create the grid
    
    // Create the coins from the grid created above  
    
    // Create the function which decides the coin locations here 
      
    } // End of Create

    update() {
      // Determine winner and scores
      let determineWInner = this.determineWinner() 
      let playerScore = this.add
        .text(195, 487, ' ' + playerCoins + '  ', {
          font: '16px Helvetica',
          fill: '#000000',
          padding: {
            x: 6,
            y: 7
          },
          backgroundColor: '#ffffff'
        })
      let compScore = this.add
        .text(430, 487, ' ' + compCoins + '  ', {
          font: '16px Helvetica',
          fill: '#000000',
          padding: {
            x: 6,
            y: 7
          },
          backgroundColor: '#ffffff'
        })
      /*
      // Input / marker creation
      this.input.setHitArea(grid).on('gameobjectover', function (pointer, gameObject) {
        gameObject.setTint(0xff0000);
      });
      this.input.setHitArea(grid).on('gameobjectout', function (pointer, gameObject) {
        gameObject.clearTint();
      });
       //Check on player click
      this.input.setHitArea(grid).on('gameobjectdown', function (pointer, gameObject) {

        if (gameObject.texture.key === 'blank') {
          game.input.enabled = false;
          let clickedPlot = gameObject

          //playerCheck starts here
          function playerCheck() {
           
            if (playerCoins !== 3) {
              setTimeout(function () {
                compTurn()
              }, 450);
            }
          }
          playerCheck();
        } else {
          function input() {
            game.input.enabled = true;
          }
          setTimeout(function () {
            input()
          }, 1000)
        }
      })
       */
      
      // Computer turn  
      function compTurn() {
        let compChoice;
        let item;
        let items = [];
        function singleIndex() {
          item = Math.floor(Math.random() * grid.length);
          for (let i = 0; i < 1; i++) {
            if (items.indexOf(item) !== null) {
              compChoice = {
                c: grid[item],
                key: grid[item].texture.key
              }
              items.push(item)
            } else {
              singleIndex()
            }
          }
        }
        singleIndex()
        if (compChoice.key !== 'blank') {
          compTurn()
        } else {
          for (let i = 0; i < coinCollection.length; i++) {
            if (compChoice.c === coinCollection[i]) {
              compCoins++;
              grid[item].setTexture('gold')
              break;
            } else {
              grid[item].setTexture('dig')
            }
          }
        }
        function input() {
          game.input.enabled = true;
        }
        setTimeout(function () {
          input()
        }, 1000)
      }
    } //end Update 

    // Helper Functions
    endGame() {
      this.scene.stop('GameScene');
      this.scene.start('EndScene');
      game.input.enabled = true;
    }

    determineWinner() {
      if (playerCoins === 3 || compCoins === 3) {
        this.endGame()
      }
    }
  } // end GameScene