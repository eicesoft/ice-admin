<template>
  <div class="minesweeper">
    <h1 class="title">Minesweeper</h1>
    <div class="board">
      <div v-for="(row, x) in board" :key="x" class="row">
        <div
          v-for="(cell, y) in row"
          :key="y"
          :class="['cell', { revealed: cell.revealed, marked: cell.marked }]"
          @click="handleCellClick(x, y)"
          @contextmenu.prevent="markCell(x, y)"
        >
          <span v-if="cell.revealed">
            {{ cell.isMine ? '💣' : cell.neighborMines || '' }}
          </span>
          <span v-else-if="cell.marked">🚩</span>
        </div>
      </div>
    </div>
    <div v-if="gameOver" class="game-over">
      {{ gameOverMessage }}
    </div>
    <button class="reset-button" @click="resetGame">Reset Game</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rows: 20,
        cols: 30,
        mines: 99,
        board: [],
        gameOver: false,
        gameOverMessage: '',
      }
    },
    created() {
      this.resetGame()
    },
    methods: {
      resetGame() {
        this.board = this.generateBoard()
        this.placeMines()
        this.calculateNeighborMines()
        this.gameOver = false
        this.gameOverMessage = ''
      },
      generateBoard() {
        return Array.from({ length: this.rows }, () =>
          Array.from({ length: this.cols }, () => ({
            isMine: false,
            revealed: false,
            marked: false,
            neighborMines: 0,
          }))
        )
      },
      placeMines() {
        let minesPlaced = 0
        while (minesPlaced < this.mines) {
          const x = Math.floor(Math.random() * this.rows)
          const y = Math.floor(Math.random() * this.cols)
          if (!this.board[x][y].isMine) {
            this.board[x][y].isMine = true
            minesPlaced++
          }
        }
      },
      calculateNeighborMines() {
        for (let x = 0; x < this.rows; x++) {
          for (let y = 0; y < this.cols; y++) {
            if (!this.board[x][y].isMine) {
              this.board[x][y].neighborMines = this.countNeighborMines(x, y)
            }
          }
        }
      },
      countNeighborMines(x, y) {
        let count = 0
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newX = x + i
            const newY = y + j
            if (newX >= 0 && newX < this.rows && newY >= 0 && newY < this.cols && this.board[newX][newY].isMine) {
              count++
            }
          }
        }
        return count
      },
      handleCellClick(x, y) {
        if (this.gameOver || this.board[x][y].marked) return

        if (this.board[x][y].revealed) {
          this.revealNeighborsIfSafe(x, y)
        } else {
          this.revealCell(x, y)
        }
      },
      revealCell(x, y) {
        if (this.board[x][y].revealed || this.board[x][y].marked) return

        this.board[x][y].revealed = true

        if (this.board[x][y].isMine) {
          this.gameOver = true
          this.gameOverMessage = 'Game Over! You hit a mine.'
          this.revealAllMines()
          return
        }

        if (this.board[x][y].neighborMines === 0) {
          this.revealNeighbors(x, y)
        }

        if (this.checkWin()) {
          this.gameOver = true
          this.gameOverMessage = 'Congratulations! You won!'
        }
      },
      revealNeighborsIfSafe(x, y) {
        const cell = this.board[x][y]
        if (!cell.revealed || cell.isMine) return

        let markedMines = 0
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newX = x + i
            const newY = y + j
            if (newX >= 0 && newX < this.rows && newY >= 0 && newY < this.cols && this.board[newX][newY].marked) {
              markedMines++
            }
          }
        }

        if (markedMines === cell.neighborMines) {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newX = x + i
              const newY = y + j
              if (newX >= 0 && newX < this.rows && newY >= 0 && newY < this.cols && !this.board[newX][newY].marked) {
                this.revealCell(newX, newY)
              }
            }
          }
        }
      },
      revealNeighbors(x, y) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newX = x + i
            const newY = y + j
            if (newX >= 0 && newX < this.rows && newY >= 0 && newY < this.cols && !this.board[newX][newY].revealed) {
              this.revealCell(newX, newY)
            }
          }
        }
      },
      markCell(x, y) {
        if (!this.gameOver && !this.board[x][y].revealed) {
          this.board[x][y].marked = !this.board[x][y].marked
        }
      },
      revealAllMines() {
        for (let x = 0; x < this.rows; x++) {
          for (let y = 0; y < this.cols; y++) {
            if (this.board[x][y].isMine) {
              this.board[x][y].revealed = true
            }
          }
        }
      },
      checkWin() {
        for (let x = 0; x < this.rows; x++) {
          for (let y = 0; y < this.cols; y++) {
            if (!this.board[x][y].isMine && !this.board[x][y].revealed) {
              return false
            }
          }
        }
        return true
      },
    },
  }
</script>

<style scoped>
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .minesweeper {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  .title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  .board {
    display: inline-block;
    background: #bdbdbd;
    padding: 10px;
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .row {
    display: flex;
  }

  .cell {
    width: 30px;
    height: 30px;
    border: 2px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    background: #838383;
    font-weight: bold;
    font-size: 1.2rem;
    transition:
      background 0.2s,
      transform 0.1s;
  }

  .cell:hover {
    background: #bbb;
    transform: scale(1.05);
  }

  .cell.revealed {
    background: #e0e0e0;
    border-color: #999;
  }

  .cell.marked {
    background: #ffcc00;
  }

  .cell.revealed span {
    color: #333;
  }

  .cell.marked span {
    color: #ff0000;
  }

  .game-over {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff0000;
  }

  .reset-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background 0.2s;
  }

  .reset-button:hover {
    background: #45a049;
  }
</style>
