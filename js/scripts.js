$(document).ready(function() {
  $("#theForm").submit(function(){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var newSentence = "";
    for (var i=0; i<sentence.length; i = i + 1) {
      if (sentence[i] === "a" | sentence[i] === "e" | sentence[i] === "i" | sentence[i] === "o" | sentence[i] === "u") {
        newSentence += "-";
      } else {
        newSentence += sentence[i];
      }
    }
    alert(newSentence);
  })
})
