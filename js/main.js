window.addEventListener("load", function() {
  var canvas = document.getElementById("Canvas");
  canvas.width = screen.width;
  canvas.height = document.height;
  console.log(screen.height);
  var context = canvas.getContext("2d");

  var renderer = new GridRenderer(canvas, context);


  setInterval(update, 1000);

  function update() {
    renderer.Render();
  }
});
