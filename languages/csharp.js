const CSharp = {
    name: "C#",
    style: "c#",
    example: `using System;

class Program
{
    static int Sum(int a, int b)
    {
        return a + b;
    }

    static void Main(string[] args)
    {
        const int A = 8, B = 7;
        Console.WriteLine($"{A} + {B} = {Sum(A, B)}");
    }
}
`
};
add_langugage(CSharp);
