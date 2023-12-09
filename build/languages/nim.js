const Nim = {
    name: "Nim",
    style: "nim",
    example: `proc sum(a, b: int): int =
    result = a + b

proc main() =
    const A = 8
    const B = 7
    echo A, " + ", B, " = ", sum(A, B)

when isMainModule:
    main()`
};
add_langugage(Nim);
