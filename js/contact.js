let btn = document.getElementById('submitbtn');
// console.log(btn);
btn.addEventListener('click', function () {
    let addName = document.getElementById('uname');
    let addEmail = document.getElementById('uemail');
    let addNumber = document.getElementById('unumber');
    let addQuery = document.getElementById('query');
    let info = localStorage.getItem('info');
    if (addName.value == "" || addEmail.value == "" || addNumber.value == "" || addQuery.value == "") {
        alert('Please Enter Valid Details');
    }
    else {
        if (info == null) {
            infoObj = [];
        }
        else {
            infoObj = JSON.parse(info);
        }
        infoObj.push(addName.value);
        infoObj.push(addEmail.value);
        infoObj.push(addNumber.value);
        infoObj.push(addQuery.value);
        localStorage.setItem('info', JSON.stringify(infoObj));
        addName.value = "";
        addEmail.value = "";
        addNumber.value = "";
        addQuery.value = "";
        console.log(infoObj);
        console.log("done");
        const userName = localStorage.getItem(addName.value);
        const userEmail = localStorage.getItem(addEmail.value);
        const userNumber = localStorage.getItem(addNumber.value);
        const userQuery = localStorage.getItem(addQuery.value);

        let myStatus = document.getElementsByTagName('span')[0];
        myStatus.innerHTML = "Submitted";

        setTimeout(function () {
            myStatus.style.display = "none";
        }, 2000);
    }
})

function getData() {
    let url = '/api/contact.json';
    fetch(url).then((response) => {
        return response.text();
    }).then(data => {
        // let dispData = document.getElementById('dataDisp');
        // dispData.append(data);
        localStorage.setItem('query', data);
    })
}
getData();

// making post request using fetch api
// function postData(){
//     url = "/api/contact.json";
//     data = "/api/1.json";
//     params ={
//         method: "post",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(url, params).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         let dispData = document.getElementById('dataDisp');
//         dispData.append(data);
//     })
// }
// postData();