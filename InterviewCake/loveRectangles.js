var loveWidth;
var loveHeight;
var loveX;
var loveY;

var rectangle = function(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

var rectOne = new rectangle(1,10,10,4);

var rectTwo = new rectangle(8,3,9,3);

var rectOneRight = rectOne.x + rectOne.width;
var rectTwoRight = rectTwo.x + rectTwo.width;
loveWidth = Math.abs(rectOneRight - rectTwo.x);
loveHeight = Math.abs(rectOne.y - rectTwo.y);
loveX = rectOneRight - loveWidth;
loveY = rectOne.y - loveHeight;

if(rectOne.x <= rectTwo.x){
  if((rectOneRight > rectTwo.x )||(rectOne.y+rectOne.height < rectTwo.y) || (rectTwo.y+rectTwo.height < rectOne.y)){
    console.log("sad...no love here!")
  }
}else if(rectOne.x > rectTwo.x){
  if((rectTwoRight < rectOne.y) || (rectOne.y+rectOne.height < rectTwo.y) || (rectTwo.y+rectTwo.height < rectOne.y) ){
    console.log("sad...no love here!")

  }
} else{
  var love = new rectangle(loveX,loveY,loveWidth,loveHeight)
  console.log(love);
}
