const Zig = {
    name: "Zig",
    style: "zig",
    example: `const std = @import("std");

fn sum(a: i32, b: i32) i32 {
    return a + b;
}

pub fn main() void {
    const A: i32 = 8;
    const B: i32 = 7;
    const result = sum(A, B);
    std.debug.print("{} + {} = {}\\n", .{A, B, result});
}`
};
add_langugage(Zig);
