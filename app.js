const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    const randomNumbers = getRandomNumbers();
    console.log(randomNumbers);
    document.body.style.backgroundColor = colors[randomNumbers];
    color.textContent = colors[randomNumbers];
});

function getRandomNumbers() {
return Math.floor(Math.random() * colors.length);
}