const Scala: ProgrammingLanguage = {
  name: "Scala",
  style: "scala",
  example:
`object Main {
    def sum(a: Int, b: Int): Int = a + b

    def main(args: Array[String]): Unit = {
        val A = 8
        val B = 7
        println(s"$A + $B = \${sum(A, B)}")
    }
}`
};

add_langugage(Scala);
