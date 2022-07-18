import { foodItem } from "./fooditems.js";
// console.log(foodItem);

function dispItems() {
    var vegMeal = document.getElementById('veg-meal');

    const vegData = foodItem.filter(item => item.category == "Vegetarian");
    console.log(vegData);

    const nonvegData = foodItem.filter(item => item.category == "Non-Veg");
    console.log(nonvegData);

    const breadsData = foodItem.filter(item => item.category == "Breads");
    console.log(breadsData);

    const southIndianData = foodItem.filter(item => item.category == "South-Indian");
    console.log(southIndianData);

    const chineseData = foodItem.filter(item => item.category == "chinese");
    console.log(chineseData);

    const thaiData = foodItem.filter(item => item.category == "Thai");
    console.log(thaiData);

    const fastFoodData = foodItem.filter(item => item.category == "Fast-Food");
    console.log(fastFoodData);

    const beverageData = foodItem.filter(item => item.category == "Beverage");
    console.log(beverageData);
}
// dispItems();

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

function ready() {
    let removeCartButton = document.getElementsByClassName('.cart-remove');
    for (var i = 0; i < removeCartButton.lenght; i++) {
        var button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
    }
}
// remove items from cart
function removeCartItem(event) {
    var btnClicked = event.target;
    btnClicked.parentElement.remove();
    updateTotal();
}
// update total
function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');

    for(var i=0;i<cartBoxes.length;i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$",""))
        var quantity = quantityElement.ariaValueMax;
        total = total + (price*quantity);

        document.getElementsByClassName('total-price')[0].innerText = '$' + total
    }
}