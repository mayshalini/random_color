document.querySelector("button").addEventListener("click" , function(){
    const randomNumber= Math.floor(Math.random() * 16777215);
    const randomCode= "#" + randomNumber.toString(16); //because to convert to hexadecimal

    document.body.style.backgroundColor= randomCode;
    document.querySelector("h2").textContent= randomCode;
});