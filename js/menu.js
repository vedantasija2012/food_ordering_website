let addToCartBtn = document.querySelector('.addToCart');

addToCartBtn.addEventListener('click', addItem);

function addItem() {
    console.log("clicked");
    addToCartBtn.innerText = "- 1 +";
}