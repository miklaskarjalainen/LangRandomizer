function get_random_language() {
    const Random = Math.floor(Math.random() * Languages.length);
    return Languages[Random];
}
const Languages = [
    {
        name: "Assembly",
        style: "x86asm", // highlight.js style
        example: `hello:
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
    },
    {
        name: "Bash",
        style: "bash", // highlight.js style
        example: `# Declaring a variable
var="Hello World"
# Printing it
echo "$var"
`
    }
];
