
function randomize_clicked() {
    const Language = get_random_language();
    document.getElementById("answer").innerHTML = Language.name;
    
    const highlightedCode = hljs.highlight(
        Language.example,
        { language: Language.style }
    ).value
    document.getElementById("example-code").innerHTML = highlightedCode;
}


let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

document.addEventListener('DOMContentLoaded', () => {
    const Easing = 100; 
    const InterBubble = document.getElementById("mouse-circle");

    function move() {
        curX += (tgX - curX) / Easing;
        curY += (tgY - curY) / Easing;
        InterBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame( () => {
            move();
        })
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    })

    move();
})
