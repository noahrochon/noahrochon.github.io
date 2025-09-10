$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
createPlatform(600, 650, 10, 10, "red")
createPlatform(500, 0, 0, 250);
createPlatform(1200, 500, 50, 50, "red")
createPlatform(1100, 620, 50, 50, "red")
createPlatform(600, 600, 30, 90);
createPlatform(1300, 600, 50, 50, "red")
createPlatform(600, 630, 200, 20, "blue", 300, 500, 5)
createPlatform(400, 630, 300, 20, "blue", 300, 500, 5)
createPlatform(1000, 600, 60, 50, "red")

    // TODO 3 - Create Collectables
     createCollectable("steve", 1450, 50,0.01);
createCollectable("steve", 800, 170, 0.01, 0.7);
 createCollectable("diamond", 1050, 50,0.01);

    
    // TODO 4 - Create Cannons
     createCannon("top", 700, 2000);
createCannon("top", 500, 1500);
createCannon("right", 800, 300)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
