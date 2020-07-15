// Declaring the variables
var totalStarNum = $(".star").length;
var starThick = 1;
var starArm = 10;

var smallStarNum = 50;
var bigStarNum = 100;

var winHeight = $(window).height();
var winWidth = $(window).width() ;

// Vertically aligning the moon
var moonHeight = $(".moon").height();
var vertAlign= moonHeight/2;
$(".moon").css({
  "margin-top": -vertAlign
});

// Adding point stars to the body part
function addStars(){
  var stars1 = "<div class='star star1'></div>"
  var stars2 = "<div class='star star2'></div>"

  $("body").append(stars1, stars2);
}

// Adding the 4point stars to the body part
function addmainStar(){
  var mainStarAdd = "<div class='mainStar'></div>";
  var stars3 = "<div class='star star3'></div>"

  $('body').append(stars3, mainStarAdd);
}

// Calling the addStars() and addmainStar() function for adding the stars in the screen
for (var i = 0; i < smallStarNum; i++){
  addStars();
}

for (var i = 0; i < bigStarNum; i++){
  addmainStar();
}

// Randomly placing all the stars in the screen
for (var j = 0; j < ($('.star1').length); j++){
  var topVal1 = Math.floor(Math.random() * Math.floor(winHeight));
  var leftVal1 = Math.floor(Math.random() * Math.floor(winWidth));
  $('.star1').eq(j).css({"top": topVal1, "left": leftVal1});

  var topVal2 = (Math.floor(Math.random() * Math.floor($(window).height())));
  var leftVal2 = (Math.floor(Math.random() * Math.floor($(window).width())));
  $('.star2').eq(j).css({"top": topVal2, "left": leftVal2});
}


// Positioning the main Star and star3
for (var j = 0; j <= ($('.mainStar').length); j++){

  var topValStar = Math.floor(Math.random() * Math.floor(winHeight));
  var leftValStar = Math.floor(Math.random() * Math.floor(winWidth));
  $(".mainStar").eq(j).css({"top": topValStar + 'px', "left": leftValStar + 'px'});

  var topValBefore = topValStar;
  var leftValBefore = leftValStar - starThick + starArm;
  $(".mainStar:before").eq(j).css({"top": topValBefore + 'px', "left": leftValBefore + 'px'});

  var topValAfter = topValStar - starArm + starThick;
  var leftValAfter = leftValStar - starThick + starArm;
  $(".mainStar:after").eq(j).css({"top": topValAfter + 'px', "left": leftValAfter + 'px'});

  var StarLeft = leftValStar + starArm - starThick * 0.5;
  var StarTop = topValStar - starThick * 0.5;
  var star3Num = $(".star3").eq(j);
  $('.star3').eq(j).css({"top": StarTop, "left": StarLeft});
}


// ****Creating the delay in animation for every stars***
for (var i = 0; i <= ($('.mainStar')).length; i++) {
  var delayVal = Math.random() * 50;

  $(".mainStar").eq(i).css({"animation-delay": delayVal + 's'});
  $(".star3").eq(i).css({"animation-delay": delayVal + 's'});
  $(".star1").eq(i).css({"animation-delay": delayVal + 's'});
  $(".star2").eq(i).css({"animation-delay": delayVal + 's'});

}
