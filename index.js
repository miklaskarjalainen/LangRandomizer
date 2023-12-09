let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;
document.addEventListener('DOMContentLoaded', () => {
    // Click event
    function randomize_clicked() {
        const Language = get_random_langage();
        document.getElementById("answer").innerHTML = Language.name;
        // @ts-ignore
        const highlightedCode = hljs.highlight(Language.example, { language: Language.style }).value;
        document.getElementById("example-code").innerHTML = highlightedCode;
    }
    document.getElementById("_randomize_langauge").addEventListener("click", () => {
        randomize_clicked();
    });
    // Following bubble
    const Easing = 100;
    const InterBubble = document.getElementById("mouse-circle");
    function move() {
        curX += (tgX - curX) / Easing;
        curY += (tgY - curY) / Easing;
        InterBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });
    move();
    // @ts-ignore
    hljs.highlightAll();
});
