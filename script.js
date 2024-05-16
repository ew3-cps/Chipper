var submitButton = document.getElementById("submitBurrito");


   

submitButton.addEventListener("click", function() {
    var burritoForm = document.getElementById("burritoForm");
    var displayBurrito = document.getElementById("burritoResults");
    var formData = new FormData(burritoForm);
    var rice = formData.get("rice");
    var beans = formData.get("beans");
    var protein = formData.get("protein");

    displayBurrito.innerHTML = "You ordered a " + rice + " burrito with " + beans + " beans," + " and " + protein + " as your protein.";
});

