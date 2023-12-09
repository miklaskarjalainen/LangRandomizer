const Dart: ProgrammingLanguage = {
    name: "Dart",
    style: "dart",
    example:
`int sum(int a, int b) {
    return a + b;
}

void main() {
    const int A = 8, B = 7;
    print('$A + $B = \${sum(A, B)}');
}
`
};

add_langugage(Dart);