
function randomize_clicked() {
    const Language = get_random_language();
    document.getElementById("answer").innerHTML = Language.name;
    
    const highlightedCode = hljs.highlight(
        Language.example,
        { language: Language.style }
    ).value
    document.getElementById("example-code").innerHTML = highlightedCode;
}

