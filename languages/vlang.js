const Vlang = {
    name: "Vlang",
    style: "rust",
    example: `fn sum(a int, b int) int {
    return a + b
}

fn main() {
    const A := 8
    const B := 7
    println('$A + $B = \${sum(A, B)}')
}`
};
add_langugage(Vlang);
