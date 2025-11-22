document.body.style.color = "#9d4971";
document.body.style.fontFamily = "Poppins";

const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

input.focus();

button.disabled = true;
button.style.opacity = "0.5"; 

input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        button.disabled = true;
        button.style.opacity = "0.5";
        button.style.cursor = "not-allowed";
    } else {
        button.disabled = false;
        button.style.opacity = "1";
    }
});

button.addEventListener('click', () => {
    const inputValue = input.value.trim();

    if (inputValue <= 74) {
        output.textContent = "You have a FAILED grade. =(";
    } else if (inputValue < 90) {
        output.textContent = "You have a PASSING grade.";
    } else if (inputValue <= 94) {
        output.textContent = "You are a WITH HONOR student! Congrats!";
    } else if (inputValue <= 97) {
        output.textContent = "You are a WITH HIGH HONOR student! Congrats!";
    } else if (inputValue <= 100) {
        output.textContent = "You are a WITH HIGHEST HONOR student! Congrats!";            
    } else if (inputValue > 100) {
        output.textContent = "The highest grade you can attain is 100."
    } else {
        alert("Invalid Input!");
    }
});