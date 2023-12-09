const Cpp: ProgrammingLanguage = {
    name: "C++",
    style: "c++",
    example:
`#include <iostream>

int sum(int a, int b) {
    return a + b;
}

int main(int argc, char** argv) {
    const int A = 8, B = 7;
    std::cout << A << " + " << B << " = " << sum(A, B) << std::endl;
    return 0;
}
`
};

add_langugage(Cpp);