const Rust = {
    name: "Rust",
    style: "rust",
    example: `fn sum(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let a = 8;
    let b = 7;
    println!("{} + {} = {}", a, b, sum(a, b));
}`
};
add_langugage(Rust);
