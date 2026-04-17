document.addEventListener("DOMContentLoaded", function () {

    let count = 0;

    const buttons = document.querySelectorAll(".cart-btn");
    const cartCount = document.getElementById("cart-count");

    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            count++;
            cartCount.textContent = count;
        });
    });


    const searchBox = document.getElementById("search-box");
    const products = document.querySelectorAll(".product-item");

    searchBox.addEventListener("keyup", function(){

        let value = searchBox.value.toLowerCase();

        products.forEach(function(item){

            let text = item.innerText.toLowerCase();

            if(text.includes(value)){
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });


    const themeBtn = document.getElementById("theme-btn");

    themeBtn.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });


    const topBtn = document.getElementById("topBtn");

    topBtn.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});