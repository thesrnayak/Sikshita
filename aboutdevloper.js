let a = document.querySelector('.mode');
let curmode = "light";

a.addEventListener('click', function(event) {
    if (curmode === "light") {
        curmode = "dark";
        // document.body.style.backgroundColor = "black"; 
        document.body.style.backgroundColor = "black";
    } else {
        curmode = "light";
        // document.body.style.backgroundColor = "white"; // You can set this to any other light color
        document.body.style.backgroundColor = "white";
    }
});
