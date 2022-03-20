var themeList = [
  // "Fish",
  "Water",
  "Sand",
  // "Palm tree",
  "Stars",
  "Butterflies", 
  "Flowers",
  "Sun",
  "Rainbow",
  "Cotton",
  "Breeze",
  "Fruit",
  // "Rock",
  "Lake",
  "Mountain",
  "Birds",
  "Sea Shells",
  // "Ocean",
  "Pine tree",
  "Sky",
  "Grass",
  "Cloud",
  "Mint",
  "Pine cones",
  "Sand dune",
  "River",
  "Feather",
  "Cactus",
  // "Leaf",
  "Branch",
  "Thorns",
  "Water ",
  "Fire",
  "Wind",
  "Spring",
  "Summer",
  "Autumn",
  // "Winter",
  "Planet",
  "Moon",
  "Star",
  "Space",
  "Dawn",
  "Sunset",
  // "Rain",
  "Pebble",
  "Rocks",
  "Shadow",
  "Reflection",
  "Ripple",
  "Blossom",
  //"Tiger",
  "Antler",
  "Tree Log",
  "Natural Path",
  "Mushroom",
  // "Frog",
  "Owl",
  "Bees",
  "Lotus",
  "Cheetah",
  "Bamboo",
  "Garden",
  "Giraffe",
  "Lion",
  "Zebra",
  "Panda",
  "Hippopotamus",
  "Horse",
  "Dog",
  "Cat",
  "Parrot",
  "Penguin",
  "Dolphin",
  "Whale",
  "Shark",
  "Fish",
  "Lizard",
  "Turtle",
  "Cow",
  "Goat",
  "Sheep",
  "Elephant",
  "Monkey",
  "Bear",
  "Owl",
  "Eagle",
  "Flamingo",
  "Deer",
  "Pig",
  "Chicken",
  "Rooster",
  "Chicks",
  "Rabbit",
  "Camel",
  "Baboon",
  "Lotus"

  ];
  
  var getTheme = function () {
    return themeList[Math.floor(Math.random() * themeList.length)];
  };
  
  $("#theButton-2").click(function () {
    $(".theme").html(getTheme());
  });

  $(".menu-toggle").click(function(){
    //toggle show menu class in the menu class
    $(".menu").toggleClass("menu-show");
    $(".menu-toggle").toggleClass("menu-toggle-active");
    return
  });

  