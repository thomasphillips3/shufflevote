(function () {
  console.log("hey");

  var pic1 = document.getElementById("pic1");
  var pic2 = document.getElementById("pic2");
  var pic3 = document.getElementById("pic3");

  pic1.addEventListener("click", function() {onclick(images);}, false);
  pic2.addEventListener("click", function() {onclick(images);}, false);
  pic3.addEventListener("click", function() {onclick(images);}, false);

  var imageList=[
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

  var images=[];

  // Create image objects for each image in the list
  for (var i=0; i<imageList.length; i++) {
    images[i] = new Image(imageList[i]);
  }
  console.log (images);

  // Display 3 random pics
  display(images);

}());

function Image(image){
  this.image = image;
  this.votes = 0;

  this.clickHandler = function() {
    this.votes++;
    display(images);
    console.log(votes);
  }
}

function onclick(images) {
  display(images);
  console.log("onclick ran");
}

function display (arr) {
  console.log("display ran");
  shuffle(arr);
  var elPics= [
    document.getElementById("pic1"),
    document.getElementById("pic2"),
    document.getElementById("pic3") ];

  for (var i=0; i<3; i++) {
    elPics[i].setAttribute("src", arr[i].image);
    }
}

function random(min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}

function shuffle(arr) {
  // Fisher-Yates Shuffle code adapted from https://github.com/coolaj86/knuth-shuffle
  var i = arr.length, temp, randIndex;
  while (0 !== i) {
    randIndex = Math.floor(Math.random()*i);
    i--;
    temp = arr[i];
    arr[i] = arr[randIndex];
    arr[randIndex] = temp;
  }
  return arr;
}
