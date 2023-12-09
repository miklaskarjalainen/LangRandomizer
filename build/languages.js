var programming_languages = [];
function add_langugage(lang) {
    programming_languages.push(lang);
}
let _last_random_language = -1;
function get_random_langage() {
    let Random = _last_random_language;
    // doesn't give the same random language twice in a row
    while (Random == _last_random_language) {
        Random = Math.floor(Math.random() * programming_languages.length);
    }
    _last_random_language = Random;
    return programming_languages[Random];
}
/*

const AssemblyX86: ProgrammingLanguage = {
    name: "Assembly",
    style: "x86asm", // highlight.js style name
    example:
`hello:
.string	"Hello world!\n"
.globl	_start
_start:
    # write
    mov     $1, %rdi
    mov     $hello, %rsi
    mov     $13, %rdx
    mov     $1, %rax
    syscall

    # exit
    xor     %rdi, %rdi
    mov     $60, %rax
    syscall
`
};

add_langugage(AssemblyX86);
*/ 
