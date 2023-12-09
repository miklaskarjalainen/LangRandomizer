// When defining a new programming language the .js filepath needs to be added into index.html as well!
interface ProgrammingLanguage {
    name: string,
    style: string, // highlight.js style name 
    example: string // example block of the code
}

var programming_languages: ProgrammingLanguage[] = []

function add_langugage(lang: ProgrammingLanguage): void {
    programming_languages.push(lang)
}

let _last_random_language: number = -1
function get_random_langage(): ProgrammingLanguage {
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