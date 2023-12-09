const Jai = {
    name: "Jai",
    style: "c++",
    example: `#import "Basic";

sum::(a : s32, b : s32) -> s32 {
    return a + b;
}

main::() {
    a := 8;
    b := 7;
    print("% + % ) = %", a, b, sum(a,b));
}`
};
add_langugage(Jai);
