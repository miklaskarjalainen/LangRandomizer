
const AssemblyX86: ProgrammingLanguage = {
    name: "Assembly",
    style: "x86asm",
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
