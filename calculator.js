var screenval = document.querySelector("#search");
let btns = document.querySelectorAll("#btn");

for(let item of btns) {
    item.addEventListener('click', (e) => {
        btnstext = e.target.innerText;
        screenval.value += btnstext;
    })
}

function ans() {
    try {
        screenval.value = eval((screenval.value)
        .replace(/x/g, "*")
        .replace(/÷/g, "/"));
    }
    catch {
        screenval.value = "Error";
    }
}

function clear() {
    screenval.value = " ";
}

function del() {
    screenval.value = screenval.value.slice(0, -1);
}

document.querySelector(".clear").addEventListener('click', clear);
