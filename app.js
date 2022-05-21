const text = document.getElementById("text");
const text2 = "MFY HUKUK BÜROSUNA HOŞGELDİNİZ...";
let idx = 1;
let speed = 150;

writeText()


function writeText() {
    text.innerText = text2.slice(0, idx);

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed);
}