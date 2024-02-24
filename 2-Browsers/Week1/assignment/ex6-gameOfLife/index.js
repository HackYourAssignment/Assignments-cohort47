'use strict';

// Constants defining the size of each cell and the number of rows and columns
const CELL_SIZE = 10;
const NUM_COLUMNS = 75;
const NUM_ROWS = 40;

// Function to create a cell with random initial state
function createCell(x, y) {
  const alive = Math.random() > 0.5;
  return {
    x,
    y,
    alive,
  };
}

// Function to create the game grid
function createGrid() {
  const grid = [];
  for (let y = 0; y < NUM_ROWS; y++) {
    const row = [];
    for (let x = 0; x < NUM_COLUMNS; x++) {
      const cell = createCell(x, y);
      row.push(cell);
    }
    grid.push(row);
  }
  return grid;
}

// Function to count the number of alive neighbors for a given cell
function countAliveNeighbors(grid, x, y) {
  let count = 0;
  for (let yOffset = -1; yOffset <= 1; yOffset++) {
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      if (xOffset === 0 && yOffset === 0) continue;
      const neighborX = x + xOffset;
      const neighborY = y + yOffset;
      if (
        neighborX >= 0 &&
        neighborX < NUM_COLUMNS &&
        neighborY >= 0 &&
        neighborY < NUM_ROWS &&
        grid[neighborY][neighborX].alive
      ) {
        count++;
      }
    }
  }
  return count;
}

// Function to update the grid according to the rules of Conway's Game of Life
function updateGrid(grid) {
  const newGrid = [];
  for (let y = 0; y < NUM_ROWS; y++) {
    const newRow = [];
    for (let x = 0; x < NUM_COLUMNS; x++) {
      const cell = grid[y][x];
      const aliveNeighbors = countAliveNeighbors(grid, x, y);
      let alive = cell.alive;
      if (alive) {
        if (aliveNeighbors < 2 || aliveNeighbors > 3) {
          alive = false; // Any live cell with fewer than two live neighbors dies, as if by underpopulation.
        }
      } else {
        if (aliveNeighbors === 3) {
          alive = true; // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        }
      }
      newRow.push({ ...cell, alive });
    }
    newGrid.push(newRow);
  }
  return newGrid;
}

// Function to render the grid on the canvas
function renderGrid(context, grid) {
  context.clearRect(0, 0, NUM_COLUMNS * CELL_SIZE, NUM_ROWS * CELL_SIZE);
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLUMNS; x++) {
      const cell = grid[y][x];
      if (cell.alive) {
        context.fillStyle = 'black';
      } else {
        context.fillStyle = 'white';
      }
      context.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
}

// Function to start the game
function startGame() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const grid = createGrid();

  function update() {
    const newGrid = updateGrid(grid);
    renderGrid(context, newGrid);
    grid.splice(0, grid.length, ...newGrid);
    requestAnimationFrame(update);
  }

  update();
}

// Start the game when the page loads
window.addEventListener('load', startGame);