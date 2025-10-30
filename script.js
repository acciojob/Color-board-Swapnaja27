//your JS code here. If required.
let div = document.querySelector(".container"); // get single container
for (let i = 0; i <= 800; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
	square.style.backgroundColor = "rgb(29, 29, 29)";
    
square.addEventListener('mouseover',()=>{
	square.style.transition="none";
})
square.addEventListener('mouseout',()=>{
	square.style.backgroundColor="green";
	square.style.transition="background-color 1s ease";
})
	div.appendChild(square);
}