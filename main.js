var themeList = [
  "Fish",
  "Water",
  "Sand",
  "Palm tree",
  "Stars",
  "Butterflies", 
  "Flowers",
  "Sun",
  "Rainbow",
  "Cotton",
  "Breeze",
  "Forest",
  "Fruit",
  "Rock",
  "Lake",
  "Mountain",
  "Birds",
  "Sea Shells",
  "Ocean",
  "Pine tree",
  "Snow",
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
  "Twigs",
  "Water ",
  "Water ",
  "Fire",
  "Wind",
  "Spring",
  "Summer",
  "Autumn",
  "Winter",
  "Planet",
  "Moon",
  "Star",
  "Galaxy",
  "Space",
  "Dawn",
  "Sunset",
  "Sunrise",
  "Rain",
  "Pebble",
  "Rocks",
  "Shadow",
  "Reflection",
  "Ripple",
  "Blossom",
  "Tiger",
  "Antler",
  "Tree Trunk",
  "Tree Log",
  "Natural Path",
  "Mushroom",
  "Frog",
  "Owl",
  "Bees",
  "Lotus",
  "Cheetah",
  "Bamboo",
  "Garden"
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

  