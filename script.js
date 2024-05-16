var burritoForm = document.getElementById("burritoForm");
burritoForm.addEventListener("submit", function(event){
  var data = new FormData(burritoForm);
  var rice = data.get("rice");
  var beans = data.get("beans");
  var protein = data.get("protein");
  var displayBurrito = document.getElementById("burritoResult");
  displayBurrito.innerHTML = rice + beans + protein;
  
});
