//data- assignment
function displayFood(food) {
    var foodType = food.getAttribute("data-food-type");
    alert(foodType + " is a delicious dish from " +food.innerHTML);
    
}