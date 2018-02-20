var tapElementOne = document.getElementById('one');
var regionOne = new ZingTouch.Region(tapElementOne, true, false);
var longTap = new ZingTouch.Tap({
  maxDelay: 1000
})
var swipe=new ZingTouch.Swipe({
	numInputs: 1,
	maxRestTime: 100,
	escapeVelocity: 0.2
});
var regionthree=new ZingTouch.Region(tapElementOne,true,false);
var rotate= new ZingTouch.Rotate({
  angle:20,
distanceFromOrigin:10,
distanceFromLast:20
})

regionthree.bind(tapElementOne, rotate, function(e){
  var textElement = document.getElementById('one');
  textElement.innerHTML = "Rotated!";
  tapElementOne.style.backgroundColor='red';
  setOutput([
    ['Gesture', 'Swipe'],
    ['inputs' , '1'],
    ['interval', Math.floor(e.detail.interval) + "ms"]
  ]);

  (function(element){
    setTimeout(function(){
      element.innerHTML = "swipe or rotate the bubble";
      tapElementOne.style.backgroundColor='lightgreen';
    }, 1000);
  })(textElement);
})

regionOne.bind(tapElementOne, swipe, function(e){
  var textElement = document.getElementById('one');
  textElement.innerHTML = "Swipped!";
  tapElementOne.style.backgroundColor='black';
  setOutput([
    ['Gesture', 'Swipe'],
    ['inputs' , '1'],
    ['interval', Math.floor(e.detail.interval) + "ms"]
  ]);

  (function(element){
    setTimeout(function(){
      element.innerHTML = "swipe or rotate the bubble";
      tapElementOne.style.backgroundColor='lightgreen';
    }, 1000);
  })(textElement);
})


var tapElementTwo = document.getElementById('two');
var TwoFingerTap = new ZingTouch.Tap({
  numInputs: 2,
  maxDelay: 1000
});

var regionTwo = new ZingTouch.Region(tapElementTwo, true, false);
regionTwo.bind(tapElementTwo, TwoFingerTap, function(e){
  setOutput([
    ['Gesture', 'Tap'],
    ['inputs' , '2'],
    ['interval', Math.floor(e.detail.interval) + "ms"]
  ]);

  var textElement = document.getElementById('two');
  textElement.innerHTML = "Tapped!";
  (function(element){
    setTimeout(function(){
      element.innerHTML = "Two Finger Tap";
    }, 1000);
  })(textElement);
})


function setOutput(data){
  console.log('here');

  var outputStr = "> ";
  for (var i = 0; i < data.length; i++){
    outputStr += data[i][0] + ": " + data[i][1] + ((i===data.length-1) ? '' : ' , ');
  }
  var output = document.getElementById('output');
  output.innerHTML = outputStr;
}
