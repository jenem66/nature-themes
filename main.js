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
  "Leaf"
  ];
  
  var getTheme = function () {
    return themeList[Math.floor(Math.random() * themeList.length)];
  };
  
  $("#theButton-2").click(function () {
    $(".theme").html(getTheme());
  });
  


