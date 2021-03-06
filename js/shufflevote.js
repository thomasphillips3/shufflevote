(function () {
  console.log("hey");

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

  var totalVotes = 0;
  var pic1 = document.getElementById("pic1");
  var pic2 = document.getElementById("pic2");
  var pic3 = document.getElementById("pic3");

  pic1.addEventListener("click", function() {onclick(images, totalVotes);}, false);
  pic2.addEventListener("click", function() {onclick(images, totalVotes);}, false);
  pic3.addEventListener("click", function() {onclick(images, totalVotes);}, false);

  // Display 3 random pics
  display(images, totalVotes);
}());

function Image(image) {
  this.image = image;
  this.votes = 0;
}

function onclick(images, totalVotes) {
  var clicked = event.target.src;
  clicked = clicked.substring(clicked.search("res/"))
  for (var i=0; i<images.length; i++){
    // Search the images object for the filename stored in 'clicked'
    if (images[i].image === clicked){
      // Increment the votes for the clicked object
      images[i].votes++;
      console.log(images[i].image + ": " + images[i].votes);
      break;
    }
  }

  // TODO: Find a better way to count totalVotes
  for (var i=0; i<images.length; i++){
    totalVotes += images[i].votes;
  }

  console.log("Total Votes: " + totalVotes);
  display(images, totalVotes);
  if (totalVotes % 15 === 0){
    alert("hey");
  }
}

function display (arr) {
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
