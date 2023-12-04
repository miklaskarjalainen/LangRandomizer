function get_random_language() {
    const Random = Math.floor(Math.random() * Languages.length);
    return Languages[Random];
}

const Languages = [

{
    name: "Assembly",
    style: "x86asm", // highlight.js style
    example:
`hello:
.string	"Hello world!\n"
.globl	_start
_start:
    # write
    mov     $1, %rdi
    mov     $hello, %rsi
    mov     $13, %rdx
    mov     $1, %rax 
    syscall

    # exit
    xor     %rdi, %rdi
    mov     $60, %rax
    syscall
`
},

{
    name: "Bash",
    style: "bash", // highlight.js style
    example:
`# Declaring a variable
var="Hello World"
# Printing it
echo "$var"
`
},

{
    name: "C",
    style: "c",
    example:
`#include <stdio.h>

int sum(int a, int b) {
    return a + b;
}

int main(int argc, char** argv) {
    const int A = 8, B = 7;
    printf("%i + %i = %i\\n", A, B, sum(A, B));
    return 0;
}
`
},

{
    name: "CoffeeScript",
    style: "coffee",
    example:
`# Assignment:
number   = 42
opposite = true

# Conditions:
number = -42 if opposite

# Functions:
square = (x) -> x * x

# Arrays:
list = [1, 2, 3, 4, 5]

# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

# Splats:
race = (winner, runners...) ->
  print winner, runners

# Existence:
alert "I knew it!" if elvis?

# Array comprehensions:
cubes = (math.cube num for num in list)
`
},

{
    name: "Crystal",
    style: "crystal",
    example:
`def sum(a : Int32, b : Int32) : Int32
a + b
end

a = 8
b = 7
puts "#{a} + #{b} = #{sum(a, b)}"
`
},

{
    name: "C++",
    style: "c++",
    example:
`#include <iostream>

int sum(int a, int b) {
    return a + b;
}

int main(int argc, char** argv) {
    const int A = 8, B = 7;
    std::cout << A << " + " << B << " = " << sum(A, B) << std::endl;
    return 0;
}
`
},

{
    name: "C#",
    style: "c#",
    example:
`using System;

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
},

{
    name: "Dart",
    style: "dart",
    example:
`int sum(int a, int b) {
    return a + b;
}

void main() {
    const int A = 8, B = 7;
    print('$A + $B = \${sum(A, B)}');
}
`
},

{
    name: "Elixir",
    style: "elixir",
    example:
`defmodule Math do
    def sum(a, b) do
        a + b
    end
end

defmodule Main do
    def run do
        a = 8
        b = 7
        IO.puts "#{a} + #{b} = #{Math.sum(a, b)}"
    end
end

Main.run()
`
},

{
    name: "Forth",
    style: "bash",
    example:
`: sum + ;
: main
  8 7 sum . cr ;
main
`
},

{
    name: "F#",
    style: "fsharp",
    example:
`let sum a b = a + b

[<EntryPoint>]
let main argv =
    let A = 8
    let B = 7
    printfn "%i + %i = %i" A B (sum A B)
    0 // Return an integer exit code
`
}, 

{
    name: "GDScript",
    style: "gdscript",
    example:
`func _sum(a, b):
    return a + b

func _ready():
    var A = 8
    var B = 7
    print("%d + %d = %d" % [A, B, _sum(A, B)])`
}, 

{
    name: "GoLang",
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
},

{
    name: "Haskell",
    style: "haskell",
    example:
`sum :: Int -> Int -> Int
sum a b = a + b

main :: IO ()
main = do
    let a = 8
        b = 7
    putStrLn $ show a ++ " + " ++ show b ++ " = " ++ show (sum a b)`
},

{
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
},

{
    name: "Jai",
    style: "c++",
    example:
`#import "Basic";

sum::(a : s32, b : s32) -> s32 {
    return a + b;
}

main::() {
    a := 8;
    b := 7;
    print("% + % ) = %", a, b, sum(a,b));
}`
},

{
    name: "Java",
    style: "java",
    example:
`public class Main {
    static int sum(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        final int A = 8, B = 7;
        System.out.printf("%d + %d = %d\n", A, B, sum(A, B));
    }
}`
},

{
    name: "JavaScript",
    style: "javascript",
    example:
`function sum(a, b) {
    return a + b;
}

const A = 8;
const B = 7;
console.log(\`\${A} + \${B} = \${sum(A, B)}\`);`
},

{
    name: "Julia",
    style: "julia",
    example:
`function sum(a, b)
    return a + b
end

function main()
    const A = 8
    const B = 7
    println("$A + $B = $(sum(A, B))")
end

main()`
},

{
    name: "Lisp",
    style: "lisp",
    example:
`(defun sum (a b)
(+ a b))

(defun main ()
(let ((A 8)
      (B 7))
  (format t "~a + ~a = ~a~%" A B (sum A B))))

(main)`
},

{
    name: "Lua",
    style: "lua",
    example:
`function sum(a, b)
    return a + b
end

local A = 8
local B = 7
print(A .. " + " .. B .. " = " .. sum(A, B))`
},

{
    name: "Mojo",
    style: "python",
    example:
`import check_mod

check_mod.install_if_missing("numpy")
import numpy as np

def test_interop_func():
    print("Hello from Python!")
    a = np.array([1, 2, 3])
    print("I can even print a numpy array: ", a)


if __name__ == "__main__":
    from timeit import timeit

    print(timeit(lambda: test_interop_func(), number=1))`
},

{
    name: "Nim",
    style: "nim",
    example:
`proc sum(a, b: int): int =
    result = a + b

proc main() =
    const A = 8
    const B = 7
    echo A, " + ", B, " = ", sum(A, B)

when isMainModule:
    main()`
},

{
    name: "Objective-C",
    style: "objc",
    example:
`#import <Foundation/Foundation.h>

int sum(int a, int b) {
    return a + b;
}

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        const int A = 8, B = 7;
        NSLog(@"%i + %i = %i", A, B, sum(A, B));
    }
    return 0;
}`
},

{
    name: "OCaml",
    style: "ocaml",
    example:
`let sum a b = a + b;;

let () =
  let a = 8 in
  let b = 7 in
  print_endline (string_of_int a ^ " + " ^ string_of_int b ^ " = " ^ string_of_int (sum a b))`
},

{
    name: "Pascal",
    style: "pascal",
    example:
`program SumProgram;

function Sum(a, b: Integer): Integer;
begin
  Sum := a + b;
end;

var
  A, B: Integer;

begin
  A := 8;
  B := 7;
  writeln(A, ' + ', B, ' = ', Sum(A, B));
end.`
},

{
    name: "Perl",
    style: "perl",
    example:
`sub sum {
    my ($a, $b) = @_;
    return $a + $b;
}

my $A = 8;
my $B = 7;
print "$A + $B = " . sum($A, $B) . "\n";`
},

{
    name: "PHP",
    style: "php",
    example:
`<?php
function sum($a, $b) {
    return $a + $b;
}

$A = 8;
$B = 7;
echo "$A + $B = " . sum($A, $B) . "\n";
?>`
},

{
    name: "Python",
    style: "python",
    example:
`def sum(a, b):
    return a + b

if __name__ == "__main__":
    A = 8
    B = 7
    print(f"{A} + {B} = {sum(A, B)}")`
},

{
    name: "Ruby",
    style: "ruby",
    example:
`def sum(a, b)
    a + b
end

A = 8
B = 7
puts "#{A} + #{B} = #{sum(A, B)}"`
},

{
    name: "Rust",
    style: "rust",
    example:
`fn sum(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let a = 8;
    let b = 7;
    println!("{} + {} = {}", a, b, sum(a, b));
}`
},

{
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
},

{
    name: "Scratch",
    style: "c",
    example:
`

// scratch is a visual programming langauge

`
},

{
    name: "Swift",
    style: "swift",
    example:
`func sum(_ a: Int, _ b: Int) -> Int {
    return a + b
}

let A = 8
let B = 7
print("\\(A) + \\(B) = \\(sum(A, B))")`
},

{
    name: "TypeScript",
    style: "typescript",
    example:
`function sum(a: number, b: number): number {
    return a + b;
}

const A: number = 8;
const B: number = 7;
console.log(\`\${A} + \${B} = \${sum(A, B)}\`);
`
},

{
    name: "Vlang",
    style: "rust",
    example:
`fn sum(a int, b int) int {
    return a + b
}

fn main() {
    const A := 8
    const B := 7
    println('$A + $B = \${sum(A, B)}')
}`
},

{
    name: "Vala",
    style: "vala",
    example:
`using GLib;

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
},

{
    name: "Zig",
    style: "zig",
    example:
`const std = @import("std");

fn sum(a: i32, b: i32) i32 {
    return a + b;
}

pub fn main() void {
    const A: i32 = 8;
    const B: i32 = 7;
    const result = sum(A, B);
    std.debug.print("{} + {} = {}\\n", .{A, B, result});
}`
},
];