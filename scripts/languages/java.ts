const Java: ProgrammingLanguage = {
    name: "Java",
    style: "java",
    example:
`public class Main {
    static int sum(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        final int A = 8, B = 7;
        System.out.printf("%d + %d = %d\\n", A, B, sum(A, B));
    }
}`
};

add_langugage(Java);
