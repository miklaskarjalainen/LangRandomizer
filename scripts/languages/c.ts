
const C: ProgrammingLanguage = {
    name: "C",
    style: "c",
    example: 
`#include <stdio.h>

int sum(int a, int b) {
    return a + b;
}

int main(int argc, char** argv) {
    const int A = 8, B = 7;
    printf("%i + %i = %i\\n", A, B, sum(A, B));
    return 0;
}
`
};

add_langugage(C);
