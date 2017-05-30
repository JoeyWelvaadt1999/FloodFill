var _grid;

function FloodFill(grid) {
  _grid = grid;
}

FloodFill.prototype.Start = function (v2, curColor, targetColor) {
  var path = [];

  var _openList = [];
  var _closedList = [];
  var _startNode = _grid.GetNodeFromWorldPos(v2);
  _openList.push(_startNode);

  while (_openList.length > 0) {
    var _curNode = _openList[0];

    _openList.splice(_curNode, 1);
    _closedList.push(_curNode);

    var neighbours = _grid.GetNeighbours(_curNode.pos);

    for (var i = 0; i < neighbours.length; i++) {
      if(neighbours[i].tempColor != curColor && neighbours[i].tempColor == targetColor) {
        if(!_closedList.includes(neighbours[i])) {
          console.log(neighbours[i].color + " " + targetColor);
          neighbours[i].tempColor = curColor;
          _openList.push(neighbours[i]);
          path.push(neighbours[i]);
        }
      }
    }
  }
  Redraw(path, curColor);
}

function Redraw(path, curColor) {
  var done = false;
  for (var i = 0; i < path.length; i++) {
    (function(i) {
      setInterval(function() {path[i].color = curColor;}, 1 + (1 * i));
    })(i);
  }
}
