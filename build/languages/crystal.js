const Crystal = {
    name: "Crystal",
    style: "crystal",
    example: `def sum(a : Int32, b : Int32) : Int32
a + b
end

a = 8
b = 7
puts "#{a} + #{b} = #{sum(a, b)}"
`
};
add_langugage(Crystal);
