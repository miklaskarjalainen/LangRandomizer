const Julia = {
    name: "Julia",
    style: "julia",
    example: `function sum(a, b)
    return a + b
end

function main()
    const A = 8
    const B = 7
    println("$A + $B = $(sum(A, B))")
end

main()`
};
add_langugage(Julia);
