const HolyC: ProgrammingLanguage = {
    name: "HolyC",
    style: "typescript",
    example:
`function Sum(a, b)
{
    return a + b;
}

void _start()
{
    const A = 8, B = 7;
    PrintNum(A);
    Print(" + ");
    PrintNum(B);
    Print(" = ");
    PrintNum(Sum(A, B));
}`
};

add_langugage(HolyC);
