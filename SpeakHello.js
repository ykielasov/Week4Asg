 // STEP 2
(function (window) {
  // STEP 3
  var helloSpeaker = {};
  var speakWord = "Hello";

  // STEP 4
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker; // STEP 5

})(window);