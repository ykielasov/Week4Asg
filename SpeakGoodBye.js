 // STEP 6
(function (window) {

  // STEP 7
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  //STEP 8
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker; // STEP 9

})(window);