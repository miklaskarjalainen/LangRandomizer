const Vala = {
    name: "Vala",
    style: "vala",
    example: `using GLib;

public class Main : Object {
    public int sum(int a, int b) {
        return a + b;
    }

    public static int main(string[] args) {
        int A = 8;
        int B = 7;
        Main program = new Main();
        int result = program.sum(A, B);
        stdout.printf("%d + %d = %d\\n", A, B, result);
        return 0;
    }
}`
};
add_langugage(Vala);
