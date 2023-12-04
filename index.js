
function whattf() {
    const Language = get_random_language();
    console.log(Language);
    document.getElementById("answer").innerHTML = Language.name;
    
    const highlightedCode = hljs.highlight(
        Language.example,
        { language: Language.style }
    ).value
    document.getElementById("example-code").innerHTML = highlightedCode;
}

