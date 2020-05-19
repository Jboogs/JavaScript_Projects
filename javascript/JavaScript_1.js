//function for choosing where to eat!
function foodFunction() {
    var foodOutput;
    var foodString = " is going to be delicious!"
    var food = document.getElementById("foodInput").value;
    switch(food) {
        case "Japanese": foodOutput = "Some sashimi" + foodString;
        break;
        case "Mexican": foodOutput = "My burrito " + foodString;
        break;
        case "New Mexican": foodOutput = "That frito pie " + foodString;
        break;
        case "Thai": foodOutput = "My pad-thai " + foodString;
        break;
        case "American": foodOutput = "A cheeseburger " + foodString;
        break;
        case "Vietnamese": foodOutput = "A big bowl of Pho " + foodString;
        break;
        default: foodOutput = "Please choose from the list above!";
    }
    document.getElementById("foodOutput").innerHTML = foodOutput;
}

//elementbyclass("") JS code
function eatFunction() {
    var foo = document.getElementsByClassName("click");
    foo[0].innerHTML = "I want to eat a frito Pie!!!";
}

//Canvas assignment
function canvasFunction() {
    var can = document.getElementById("canvasPractice");
    var ctx = can.getContext("2d");
    
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "green");
    grd.addColorStop(1, "red");
    
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}
