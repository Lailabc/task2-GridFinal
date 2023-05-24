let gridSize = 3; // Number of tiles in each row and column
let tileSize; // Size of each tile
let hoveredTile = null; // Currently hovered tile


function setup() {
  createCanvas(900, 900);

  tileSize = width / gridSize;

}

function draw() {
  background(220);
  
  // Display the grid
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = i * tileSize;
      let y = j * tileSize;

      // Draw the tile
      fill(255);
      rect(x, y, tileSize, tileSize);

      // Check if the tile is currently being hovered over
      if (hoveredTile && hoveredTile.i === i && hoveredTile.j === j) {
        // Draw the triangle in the center of the tile
        let centerX = x + tileSize / 2;
        let centerY = y + tileSize / 2;
        let triangleSize = tileSize / 2;
        fill(82, 3, 252);
        noStroke();
        triangle(
          centerX, centerY - triangleSize / 2,
          centerX - triangleSize / 2, centerY + triangleSize / 2,
          centerX + triangleSize / 2, centerY + triangleSize / 2
        );
      } else {
        // Draw the ellipse in the center of the tile
        let centerX = x + tileSize / 2;
        let centerY = y + tileSize / 2;
        fill(82, 3, 252);
        noStroke();
        ellipse(centerX, centerY, tileSize / 1.02);
      }
    }
  }
}

function mouseMoved() {
  // Calculate the tile position based on the mouse coordinates
  let i = floor(mouseX / tileSize);
  let j = floor(mouseY / tileSize);

  // Update the hovered tile position
  hoveredTile = {
    i: i,
    j: j
  };
}
