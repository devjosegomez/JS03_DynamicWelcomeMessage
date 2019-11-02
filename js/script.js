const button = document.querySelector("button");
const output = document.querySelector(".output");
const input = document.querySelector("input");

button.addEventListener("click", showMessage);

function showMessage(){
    const date = new Date();
    let hour = date.getHours();
    console.log(hour);
    let message = "";
    if(hour >17){
        message = "Hello, good night " + input.value;
    }else if(hour >12){
        message = "Hello, good afternoon " + input.value;
    }else{
        message = "Hello, good morning " + input.value;
    }
    output.innerHTML = `<h2>${message}</h2>`;
}