var createButton = document.getElementById("createBtn");
var cardEl = document.getElementById("cardArea");
var input = document.getElementById("userInput");
var deleteButton = document.getElementById("deleteBtn");
var cardArray = [];


var makeCard = function() {
  cardEl.innerHTML += "<article class= " + '"' + "cards" + '"' + ">" + "<h3>" + input.value + "</h3>" + "<p>" + "<button id= " + '"' + "deleteBtn" + '"' + ">" + 'Delete' + "</button>" + "</p>" + "</article>";
};

createButton.addEventListener("click", function() {
  makeCard();
});

cardEl.addEventListener("click", function(e) {
  if (event.target.id === "deleteBtn") { // event has to occur on deleteBtn
    event.target.closest("article").remove(); // selects the immediate article around the delete button, also accesses the article from inside the innerHTML
  } else {console.log("Click delete!");}
});