

function whattf() {
    const Random = Math.floor(Math.random() * Languages.length);
    const Language = Languages[Random];

    document.getElementById("answer").innerHTML = Language;

    // console.log(Languages[Random]);
}

