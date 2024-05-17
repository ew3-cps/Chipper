var burritoForm = document.getElementById("burritoForm");
var displayBurrito = document.getElementById("burritoResult");
burritoForm.addEventListener("submit", function(event){
  var data = new FormData(burritoForm);
  var rice = data.get("rice");
  var beans = data.get("beans");
  var protein = data.get("protein");
  sessionStorage.setItem("burritoRice", rice);
  sessionStorage.setItem("burritoBeans", beans);
  sessionStorage.setItem("burritoProtein", protein);
  event.preventDefault();
});

var dispOrderButton = document.getElementById("dispOrderButton");
var displayRice = sessionStorage.getItem("burritoRice");
var displayBeans = sessionStorage.getItem("burritoBeans");
var displayProtein = sessionStorage.getItem("burritoProtein");

dispOrderButton.addEventListener("click", function(){
  displayBurrito.innerHTML = "You ordered a burrito with " + displayRice + " rice, " + displayBeans + " beans, and " + displayProtein + " as your protein.";
});