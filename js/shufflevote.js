(function () {
  console.log("hey");
  loadImages();
}());

var picShuffler = {
  pics: [
    document.getElementById('pic1'),
    document.getElementById('pic2'),
    document.getElementById('pic3'),
    ],
  }

function loadImages(){
  // Load images into an array
  // Pick 3 random numbers between 0 and images.length
  // Place those 3 indexes into the DOM
  var images=[
    "res/images/bag.jpg",
    "res/images/banana.jpg",
    "res/images/boots.jpg",
    "res/images/chair.jpg",
    "res/images/cthulhu.jpg",
    "res/images/dragon.jpg",
    "res/images/pen.jpg",
    "res/images/scissors.jpg",
    "res/images/shark.jpg",
    "res/images/sweep.jpg",
    "res/images/unicorn.jpg",
    "res/images/usb.jpg",
    "res/images/water_can.jpg",
    "res/images/wine_glass.jpg"  ];

  var elPics= [
    document.getElementById("pic1"),
    document.getElementById("pic2"),
    document.getElementById("pic3") ];

  for (var i=0; i<3; i++) {
    elPics[i].setAttribute("src", images[random(0,images.length)]);
  }
}

function random(min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}
