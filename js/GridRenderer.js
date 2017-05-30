var _width;
var _height;
var _nodeDiameter = 10;

var _grid;
var _context;
var _canvas;

var _floodFill;

function GridRenderer(canvas, context) {
  _width = canvas.width;
  _height = canvas.height;
  _canvas = canvas;

  var grid = new Grid(_width, _height, _nodeDiameter);
  _floodFill = new FloodFill(grid);
  grid.CreateGrid();

  _grid = grid.NodeGrid();
  _context = context;
}

window.addEventListener("click", function(e) {
  _floodFill.Start(new Vector2(Math.floor(e.clientX / _nodeDiameter - 1), Math.floor(e.clientY / _nodeDiameter - 1)), "#f0f", "#fff");
  _grid[Math.floor(e.clientX / _nodeDiameter - 1)][Math.floor(e.clientY / _nodeDiameter - 1)].color = "#000";
});

GridRenderer.prototype.Render = function () {
  _context.clearRect(0,0,_canvas.width, _canvas.height);
  for(var x = 0; x < _width; x++) {
    for(var y = 0; y < _height; y++) {
      var v2 = _grid[x][y].pos;
      _context.beginPath();
      _context.fillStyle = _grid[x][y].color;
      _context.rect(v2.x, v2.y, _nodeDiameter, _nodeDiameter);
      _context.fill();
      _context.stroke();
    }
  }
};
