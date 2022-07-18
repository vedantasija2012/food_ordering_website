let clrBtn = document.getElementById('clrbtn');
clrBtn.addEventListener('click', () => {
    alert('Are you sure! You want to clear cart');
});

let text;
// localStorage.setItem('myAddress','India');
let val = localStorage.getItem('myAddress');
if (val == null) {
    text = document.createTextNode('Enter your Address:')
}
else {
    text = document.createTextNode(val);
}
let editAddress = document.getElementById('address');

editAddress.appendChild(text);
editAddress.addEventListener('click', enterAddress);

function enterAddress() {
    let noTextArea = document.getElementsByClassName('textarea').length;
    if (noTextArea == 0) {
        let html = editAddress.innerHTML;
        editAddress.innerHTML = `<textarea id="textarea" class="textarea" style="width:299px; height:28px; font-size:1rem;">${html}</textarea>`;
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', () => {
        editAddress.innerHTML = textarea.value;
        localStorage.setItem('myAddress', textarea.value);
    })
}

let confirmBtn = document.querySelector('#place-order');
// console.log(confirmBtn);
confirmBtn.addEventListener('click', () => {
    let checkAddress = document.querySelector('.textarea');
    // let checkAddress = document.getElementsById('textarea');
    // console.log(checkAddress);
    if (checkAddress.value == null || checkAddress.value == undefined) {
        prompt('Kindly enter your address');
    }
    else{
        alert('Order Placed Successfully');
    }
});