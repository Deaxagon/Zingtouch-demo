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


//HTML

{/* <div id="wrapper">
    <div id="two" class="seafoam tap-area">
      Two Finger Tap
    </div>
  </div>
  <div id="output">> Interaction meta will output here.</div>
</div> */}