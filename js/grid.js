var _width;
var _height;
var _nodeDiameter;

var _grid;
var testArr;

function Grid(width, height, nodeDiameter) {

  _nodeDiameter = nodeDiameter;
  _width = width / nodeDiameter;
  _height = height / nodeDiameter;

  _grid = [];
  testArr = [];
}

Grid.prototype.CreateGrid = function () {
  for (var x = 0; x < _width; x++) {
    _grid[x] = [];
    for (var y = 0; y < _height; y++) {
      var color;
      var rand = Math.random() * 11;
      if(rand > 7 && rand < 11) {
        color = "#000";
      } else if (rand > 4 && rand < 7) {
        color = "#fff";
      }
      else if (rand > 0 && rand < 4) {
        color = "#fff";
      }

      if(x == 0 && y == 0) {
        color = "#0f0";
      }
      _grid[x][y] = new Node(new Vector2(x * _nodeDiameter, y * _nodeDiameter), color);
    }
  }
  return _grid;
};

Grid.prototype.GetNodeFromWorldPos = function (pos) {
  if(pos.x >= 0 && pos.x < _width &&
     pos.y >= 0 && pos.y < _height) {
       return _grid[pos.x][pos.y];
  }
};

Grid.prototype.GetNeighbours = function (pos) {
  var neighbours = [];
  for (var x = -1; x <= 1; x++) {
    for (var y = -1; y <= 1; y++) {

      if(x == 0 && y == 0) {
        continue;
      } else {

        var nx = (pos.x / _nodeDiameter) + x;
        var ny = (pos.y / _nodeDiameter) + y;
        if(nx >= 0 && nx < _width &&
           ny >= 0 && ny < _height) {
             neighbours.push(_grid[nx][ny]);
        }
      }
    }
  }

  return neighbours;
};

Grid.prototype.NodeGrid = function () {
  return _grid;
};
