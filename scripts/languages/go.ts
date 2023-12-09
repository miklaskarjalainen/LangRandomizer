const Go: ProgrammingLanguage = {
    name: "Go",
    style: "go",
    example:
`package main

import "fmt"

func sum(a, b int) int {
	return a + b
}

func main() {
	const A, B = 8, 7
	fmt.Printf("%d + %d = %d\n", A, B, sum(A, B))
}`
};

add_langugage(Go);
